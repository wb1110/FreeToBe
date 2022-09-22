import create from 'zustand';

const useStore = create((set) => ({
  assessment: {
    height: 0,
    weight: 0,
    age: 0,
    bodyFat: 0,
    trimester: 0,
    babies: 0,
    nursing: 0,
    activity: 0,
  },
  setAssessment: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        height: values.height,
        weight: values.weight,
        age: values.age,
        bodyFat: values.bodyFat,
        trimester: values.trimester,
        babies: values.babies,
        nursing: values.nursing,
        activity: values.activity,
      },
    })),
}));

export default useStore;
