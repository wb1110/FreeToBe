import create from 'zustand'

const useStore = create(set => ({
  assessment: {
    gender: '',
    height: '',
    weight: '',
    age: '',
    bodyFat: '',
  },
  // setGender: (sex) => set({ gender: sex }),
  setGender: (title) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        gender: title
      }
  })),
  setHWA: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        height: values.height,
        weight: values.weight,
        age: values.age,
      }
  })),
  setBodyFat: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        bodyFat: values.bodyFat,
      }
  })),
}))

export default useStore;