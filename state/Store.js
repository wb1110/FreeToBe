import create from 'zustand'

const useStore = create(set => ({
  assessment: {
    height: '',
    weight: '',
    age: '',
    abdominal: '',
    triceps: '',
    suprailiac: '',
    thigh: '',
    chest: '',
    midaxillary: '',
    subscapular: '',
    bicep: '',
    lowerBack: '',
    calf: '',
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
        abdominal: values.abdominal,
        triceps: values.triceps,
        suprailiac: values.suprailiac,
        thigh: values.thigh,
        chest: values.chest,
        midaxillary: values.midaxillary,
        subscapular: values.subscapular,
        bicep: values.bicep,
        lowerBack: values.lowerBack,
        calf: values.calf,
        bodyFat: values.bodyFat,
      }
  })),
  setAssessment: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        height: values.height,
        weight: values.weight,
        age: values.age,
        abdominal: values.abdominal,
        triceps: values.triceps,
        suprailiac: values.suprailiac,
        thigh: values.thigh,
        chest: values.chest,
        midaxillary: values.midaxillary,
        subscapular: values.subscapular,
        bicep: values.bicep,
        lowerBack: values.lowerBack,
        calf: values.calf,
        bodyFat: values.bodyFat,
        dueDate: values.dueDate,
      }
  })),
}))

export default useStore;