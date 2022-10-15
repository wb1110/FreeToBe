import create from 'zustand';
import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// eslint-disable-next-line consistent-return
const storeTracker = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`tracker`, jsonValue);
  } catch (e) {
    // saving error
    return e;
  }
};

const useTrackerStore = create((set) => ({
  tracker: [],
  // {
  //   date: null,
  //   protein: 0,
  //   fat: 0,
  //   carbs: 0,
  //   calories: 0,
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
  updateTracker: (data) => set({ tracker: data }),
  addDate: (date) =>
    set(
      produce((state) => {
        const { tracker } = state;
        tracker.push({ date, protein: 0, fats: 0, carbs: 0, calories: 0, meals: [] });
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
            proteinSum += +foodObj.proteinGrams;
            carbSum += +foodObj.carbGrams;
            fatSum += +foodObj.fatGrams;
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
      })
    ),
  deleteMeal: (dayIndex, mealName) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const dayResult = dayArray[dayIndex].meals;
        const mealIndex = dayResult.findIndex((obj) => obj.mealName === mealName);
        dayResult.splice(mealIndex, 1);
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
      })
    ),
}));

export default useTrackerStore;
