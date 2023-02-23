import { create } from 'zustand';
import produce from 'immer';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { storeTracker } from '../functions/Posts';

const startingMealArray = [
  {
    mealName: 'Breakfast',
    mealTime: 0,
    mealID: uuidv4(),
    foodItems: [],
  },
  {
    mealName: 'Snack 1',
    mealTime: 0,
    mealID: uuidv4(),
    foodItems: [],
  },
  {
    mealName: 'Lunch',
    mealTime: 0,
    mealID: uuidv4(),
    foodItems: [],
  },
  {
    mealName: 'Snack 2',
    mealTime: 0,
    mealID: uuidv4(),
    foodItems: [],
  },
  {
    mealName: 'Dinner',
    mealTime: 0,
    mealID: uuidv4(),
    foodItems: [],
  },
];

const useTrackerStore = create((set) => ({
  tracker: [],
  goalCalories: 0,
  goalProtein: 0,
  goalCarbs: 0,
  goalFat: 0,
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
  // foodName: '',
  // servingSize: 0,
  // servingNumber: 0,
  // unitOfMeasurement: '',
  // foodCalories: 0,
  // proteinGrams: 0,
  // carbGrams: 0,
  // fatGrams: 0,
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
  //         },
  //       ],
  //     },
  //   ],
  // },
  // updateTracker: (data) => set({ tracker: data }),
  updateGoalProtein: (grams) => set(() => ({ goalProtein: grams })),
  updateGoalCarbs: (grams) => set(() => ({ goalCarbs: grams })),
  updateGoalFat: (grams) => set(() => ({ goalFat: grams })),
  updateGoalCalories: (calories) => set(() => ({ goalCalories: calories })),
  updateTracker: (data) => {
    set(
      produce((state) => {
        const { tracker } = state;
        if (data) {
          data.map((obj) => tracker.push(obj));
        }
      })
    );
  },
  addDate: (date) =>
    set(
      produce((state) => {
        const { tracker } = state;
        tracker.push({
          date,
          protein: 0,
          fats: 0,
          carbs: 0,
          calories: 0,
          calcium: 0,
          choline: 0,
          copper: 0,
          iodine: 0,
          iron: 0,
          magnesium: 0,
          phosphorous: 0,
          potassium: 0,
          selenium: 0,
          sodium: 0,
          zinc: 0,
          meals: startingMealArray,
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
            proteinSum += +foodObj.protein.value || 0;
            carbSum += +foodObj.carbs.value || 0;
            fatSum += +foodObj.fat.value || 0;
            caloriesSum += +foodObj.calories.value || 0;
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
            micronutrientTotals.calcium += +(foodItem.calcium?.value ?? 0);
            micronutrientTotals.copper += +(foodItem.copper?.value ?? 0);
            micronutrientTotals.choline += +(foodItem.choline?.value ?? 0);
            micronutrientTotals.iodine += +(foodItem.iodine?.value ?? 0);
            micronutrientTotals.iron += +(foodItem.iron?.value ?? 0);
            micronutrientTotals.magnesium += +(foodItem.magnesium?.value ?? 0);
            micronutrientTotals.phosphorous += +(foodItem.phosphorous?.value ?? 0);
            micronutrientTotals.potassium += +(foodItem.potassium?.value ?? 0);
            micronutrientTotals.selenium += +(foodItem.selenium?.value ?? 0);
            micronutrientTotals.sodium += +(foodItem.sodium?.value ?? 0);
            micronutrientTotals.zinc += +(foodItem.zinc?.value ?? 0);
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
  // Meal CRUD
  addMeal: (id, values, dateV) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const dayArray = tracker;
        const objIndex = dayArray.findIndex((obj) => obj.date === dateV);
        const dayResult = dayArray[objIndex].meals;
        dayResult.push(values);
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  addMealTime: (id, values, dayIndex, mealID) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const mealArray = tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealID === mealID);
        // state.tracker[dayIndex].meals[mealIndex].mealTime = values;
        // Object.assign(mealArray[mealIndex].mealTime, values);
        mealArray[mealIndex].mealTime = values;
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  editMeal: (id, values, dayIndex, mealName) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const dayArray = tracker;
        const dayResult = dayArray[dayIndex].meals;
        const mealIndex = dayResult.findIndex((obj) => obj.mealName === mealName);
        const meal = dayResult[mealIndex];
        Object.assign(meal, values);
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  deleteMeal: (id, dayIndex, mealName) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const dayArray = tracker;
        const dayResult = dayArray[dayIndex].meals;
        const mealIndex = dayResult.findIndex((obj) => obj.mealName === mealName);
        dayResult.splice(mealIndex, 1);
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  clearMeals: () =>
    set(
      produce((state) => {
        // eslint-disable-next-line no-param-reassign
        state.tracker[0].day.meals = null;
      })
    ),
  // Food Items Crud
  addFood: (id, values, dayIndex, mealName) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const mealArray = tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealName === mealName);
        const foodArray = mealArray[mealIndex].foodItems;
        foodArray.push(values);
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  editFood: (id, values, dayIndex, mealName, foodName) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const mealArray = tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealName === mealName);
        const foodArray = mealArray[mealIndex].foodItems;
        const foodIndex = foodArray.findIndex((obj) => obj.foodName === foodName);
        Object.assign(foodArray[foodIndex], values);
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  deleteFood: (id, dayIndex, mealName, foodName) =>
    set(
      produce((state) => {
        const { tracker, goalCalories, goalCarbs, goalFat, goalProtein } = state;
        const mealArray = tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealName === mealName);
        const foodArray = mealArray[mealIndex].foodItems;
        const foodIndex = foodArray.findIndex((obj) => obj.foodName === foodName);
        foodArray.splice(foodIndex, 1);
        storeTracker(id, { tracker, goalCalories, goalCarbs, goalFat, goalProtein });
      })
    ),
  resetState: () => {
    set({ tracker: [], goalCalories: 0, goalProtein: 0, goalCarbs: 0, goalFat: 0 });
  },
}));

export default useTrackerStore;
