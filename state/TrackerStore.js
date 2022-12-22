import create from 'zustand';
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
  // Meal CRUD
  addMeal: (values, dateV) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const objIndex = dayArray.findIndex((obj) => obj.date === dateV);
        const dayResult = dayArray[objIndex].meals;
        dayResult.push(values);
        storeTracker(state.tracker);
      })
    ),
  editMeal: (values, dayIndex, mealName) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const dayResult = dayArray[dayIndex].meals;
        const mealIndex = dayResult.findIndex((obj) => obj.mealName === mealName);
        const meal = dayResult[mealIndex];
        Object.assign(meal, values);
        storeTracker(state.tracker);
      })
    ),
  deleteMeal: (dayIndex, mealName) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const dayResult = dayArray[dayIndex].meals;
        const mealIndex = dayResult.findIndex((obj) => obj.mealName === mealName);
        dayResult.splice(mealIndex, 1);
        storeTracker(state.tracker);
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
  addFood: (values, dayIndex, mealName) =>
    set(
      produce((state) => {
        const mealArray = state.tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealName === mealName);
        const foodArray = mealArray[mealIndex].foodItems;
        foodArray.push(values);
        storeTracker(state.tracker);
      })
    ),
  editFood: (values, dayIndex, mealName, foodName) =>
    set(
      produce((state) => {
        const mealArray = state.tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealName === mealName);
        const foodArray = mealArray[mealIndex].foodItems;
        const foodIndex = foodArray.findIndex((obj) => obj.foodName === foodName);
        Object.assign(foodArray[foodIndex], values);
        storeTracker(state.tracker);
      })
    ),
  deleteFood: (dayIndex, mealName, foodName) =>
    set(
      produce((state) => {
        const mealArray = state.tracker[dayIndex].meals;
        const mealIndex = mealArray.findIndex((obj) => obj.mealName === mealName);
        const foodArray = mealArray[mealIndex].foodItems;
        const foodIndex = foodArray.findIndex((obj) => obj.foodName === foodName);
        foodArray.splice(foodIndex, 1);
        storeTracker(state.tracker);
      })
    ),
}));

export default useTrackerStore;
