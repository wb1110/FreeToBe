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
  addMeal: (values, dateV) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const objIndex = dayArray.findIndex((obj) => obj.date === dateV);
        const dayResult = dayArray[objIndex].meals;
        dayResult.push(values);
        // mealList.push(values);
      })
    ),
  editMeal: (values, mealIndex, mealName) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const dayResult = dayArray[mealIndex].meals;
        const objIndex = dayResult.findIndex((obj) => obj.mealName === mealName);
        const meal = dayResult[objIndex];
        Object.assign(meal, values);
        // mealList.push(values);
      })
    ),
  clearMeals: () =>
    set(
      produce((state) => {
        // eslint-disable-next-line no-param-reassign
        state.tracker[0].day.meals = null;
      })
    ),
}));

export default useTrackerStore;
