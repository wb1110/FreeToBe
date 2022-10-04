import create from 'zustand';

const useStore = create((set) => ({
  assessment: {
    height: 0,
    weight: 0,
    age: 0,
    bodyFat: 0,
    dueDate: 0,
    babies: 0,
    nursing: 0,
    exerciseActivity: 0,
    workActivity: 0,
  },
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
  setHWA: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        height: values.height,
        weight: values.weight,
        age: values.age,
      },
    })),
  setBodyFat: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        bodyFat: values.bodyFat,
      },
    })),
  setPregnant: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        dueDate: values.dueDate,
        babies: values.babies,
      },
    })),
  setNursing: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        nursing: values.nursing,
      },
    })),
  setExerciseActivity: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        exerciseActivity: values.exerciseActivity,
      },
    })),
  setWorkActivity: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        workActivity: values.workActivity,
      },
    })),
  setAssessment: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        height: values.height,
        weight: values.weight,
        age: values.age,
        bodyFat: values.bodyFat,
        dueDate: values.dueDate,
        babies: values.babies,
        nursing: values.nursing,
        exerciseActivity: values.exerciseActivity,
        workActivity: values.workActivity,
      },
    })),
  // tracker settings
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

export default useStore;
