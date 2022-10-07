import create from 'zustand';
import produce from 'immer';

const useTrackerStore = create((set) => ({
  tracker: [
    {
      day: {
        date: '',
        meals: [
          {
            meal: {
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
          },
        ],
      },
    },
  ],
  addMeal: (values) =>
    set(
      produce((state) => {
        const mealList = state.tracker[0].day.meals;
        mealList.push(values);
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
