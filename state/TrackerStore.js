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
        const dateArray = state.tracker;
        dateArray.push({ date });
      })
    ),
  addMeal: (values, dateV) =>
    set(
      produce((state) => {
        const dayArray = state.tracker;
        const objIndex = dayArray.findIndex((obj) => obj.date === dateV);
        dayArray[objIndex].meals = [];
        const result = dayArray[objIndex].meals;
        result.push(values);
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
