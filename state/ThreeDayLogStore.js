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
            proteinSum += +foodObj.protein.value;
            carbSum += +foodObj.carbs.value;
            fatSum += +foodObj.fat.value;
            caloriesSum += +foodObj.calories.value;
            return foodObj;
          });
          return mealObj;
        });
        tracker[date].protein = proteinSum;
        tracker[date].carbs = carbSum;
        tracker[date].fats = fatSum;
        tracker[date].calories = caloriesSum;
      })
    ),
  updateMicros: (array, date) =>
    set(
      produce((state) => {
        const { tracker } = state;
        const todayData = array[date];
        const micronutrientTotals = {
          calcium: 0,
          copper: 0,
          choline: 0,
          iodine: 0,
          iron: 0,
          magnesium: 0,
          phosphorous: 0,
          potassium: 0,
          selenium: 0,
          sodium: 0,
          zinc: 0,
        };

        // Loop through all the meals recorded for today
        todayData.meals.forEach((meal) => {
          // Loop through all the food items for each meal and add up the micronutrient values
          meal.foodItems.forEach((foodItem) => {
            micronutrientTotals.calcium += +foodItem.calcium || 0;
            micronutrientTotals.copper += +foodItem.copper || 0;
            micronutrientTotals.choline += +foodItem.choline || 0;
            micronutrientTotals.iodine += +foodItem.iodine || 0;
            micronutrientTotals.iron += +foodItem.iron || 0;
            micronutrientTotals.magnesium += +foodItem.magnesium || 0;
            micronutrientTotals.phosphorous += +foodItem.phosphorous || 0;
            micronutrientTotals.potassium += +foodItem.potassium || 0;
            micronutrientTotals.selenium += +foodItem.selenium || 0;
            micronutrientTotals.sodium += +foodItem.sodium || 0;
            micronutrientTotals.zinc += +foodItem.zinc || 0;
          });
        });

        // Update today's object with the micronutrient totals
        tracker[date].calcium = micronutrientTotals.calcium;
        tracker[date].copper = micronutrientTotals.copper;
        tracker[date].choline = micronutrientTotals.choline;
        tracker[date].iodine = micronutrientTotals.iodine;
        tracker[date].iron = micronutrientTotals.iron;
        tracker[date].magnesium = micronutrientTotals.magnesium;
        tracker[date].phosphorous = micronutrientTotals.phosphorous;
        tracker[date].potassium = micronutrientTotals.potassium;
        tracker[date].selenium = micronutrientTotals.selenium;
        tracker[date].sodium = micronutrientTotals.sodium;
        tracker[date].zinc = micronutrientTotals.zinc;
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
