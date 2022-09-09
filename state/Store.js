import create from 'zustand'

const useStore = create(set => ({
  assessment: {
    height: '',
    weight: '',
    age: '',
    bodyFat: '',
  },
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