import create from 'zustand';
import produce from 'immer';

const useTrackerStore = create((set) => ({
  tracker: [
    {
      date: null,
      meals: [
        {
          mealName: '',
          mealTime: 0,
          foodItems: [
            {
              foodName: '',
              foodCalories: 0,
              foodProtein: 0,
              foodCarbs: 0,
              foodFat: 0,
            },
          ],
        },
      ],
    },
  ],
  addDate: (date) =>
    set(
      produce((state) => {
        const { tracker } = state;
        tracker.push({ date, meals: [] });
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
