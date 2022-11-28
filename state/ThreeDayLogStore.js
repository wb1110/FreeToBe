import produce from 'immer';
import create from 'zustand';
import { storeThreeDayLog } from '../functions/Posts';

const useThreeDayLogStore = create((set) => ({
  threeDayLog: [],
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
  updateThreeDayLog: (data) => set({ threeDayLog: data }),
  addDay: (trackerDay) =>
    set(
      produce((state) => {
        const { threeDayLog } = state;
        threeDayLog.push(trackerDay);
        console.log(threeDayLog, 'threeDayLogState');
        storeThreeDayLog(threeDayLog);
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
}));

export default useThreeDayLogStore;
