import produce from 'immer';
import { create } from 'zustand';
import { storeThreeDayLog } from '../functions/Posts';

const useThreeDayLogStore = create((set) => ({
  threeDayLog: [],
  complete: false,
  goalProtein: 0,
  goalCarbs: 0,
  goalFats: 0,
  goalCalories: 0,
  // {
  //   date: null,
  //   protein: 0,
  //   fat: 0,
  //   carbs: 0,
  //   calories: 0,
  // calcium: 0,
  // choline: 0,
  // copper: 0,
  // iodine: 0,
  // iron: 0,
  // magnesium: 0,
  // phosphorous: 0,
  // potassium: 0,
  // selenium: 0,
  // sodium: 0,
  // zinc: 0,
  //   meals: [
  //     {
  //       mealName: '',
  //       mealTime: 0,
  //       foodItems: [
  //         {
  //           foodName: '',
  //           foodCalories: 0,
  //           proteinGrams: 0,
  //           carbGrams: 0,
  //           fatGrams: 0,
  //         },
  //       ],
  //     },
  //   ],
  // },
  updateCompletion: () => set(() => ({ complete: true })),
  updateGoalProtein: (grams) => set(() => ({ goalProtein: grams })),
  updateGoalCarbs: (grams) => set(() => ({ goalCarbs: grams })),
  updateGoalFat: (grams) => set(() => ({ goalFat: grams })),
  updateGoalCalories: (calories) => set(() => ({ goalCalories: calories })),
  updateComplete: (completeStatus) => set(() => ({ complete: completeStatus })),
  updateThreeDayLog: (data) =>
    set(
      produce((state) => {
        const { threeDayLog } = state;
        if (data) {
          data.map((obj) => threeDayLog.push(obj));
        }
      })
    ),
  addDay: (id, trackerDay) =>
    set(
      produce((state) => {
        const { threeDayLog, complete, goalCalories, goalCarbs, goalFats, goalProtein } = state;
        threeDayLog.push(trackerDay);
        storeThreeDayLog(id, {
          threeDayLog,
          complete,
          goalCalories,
          goalCarbs,
          goalFats,
          goalProtein,
        });
      })
    ),
  updateMacros: (array, date) =>
    set(
      produce((state) => {
        const { tracker } = state;
        let proteinSum = 0;
        let carbSum = 0;
        let fatSum = 0;
        let caloriesSum = 0;
        array[date].meals.map((mealObj) => {
          // eslint-disable-next-line no-return-assign
          mealObj.foodItems.map((foodObj) => {
            proteinSum += +foodObj.protein;
            carbSum += +foodObj.carbs;
            fatSum += +foodObj.fat;
            caloriesSum += +foodObj.calories;
            return foodObj;
          });
          // console.log(macroSum, date);
          return mealObj;
        });
        tracker[date].protein = proteinSum;
        tracker[date].carbs = carbSum;
        tracker[date].fats = fatSum;
        tracker[date].calories = caloriesSum;
      })
    ),
  resetState: () => {
    set({
      threeDayLog: [],
      complete: false,
      goalProtein: 0,
      goalCarbs: 0,
      goalFats: 0,
      goalCalories: 0,
    });
  },
}));

export default useThreeDayLogStore;
