import create from 'zustand';

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
  setMeals: (values) =>
    set((state) => ({
      tracker: {
        ...state.tracker,
        height: values.height,
        weight: values.weight,
        age: values.age,
      },
    })),
}));

export default useTrackerStore;
