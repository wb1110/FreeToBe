import create from 'zustand'

const useStore = create(set => ({
  assessment: {
    gender: 'Test',
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
  setHeight: () => set(state => ({ height: state.height })),
  setWeight: () => set(state => ({ weight: state.weight })),
  setAge: () => set(state => ({ age: state.age })),
  setBodyFat: () => set(state => ({ bodyFat: state.bodyFat })),
}))

export default useStore;