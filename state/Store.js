/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import produce from 'immer';
import { storeData } from '../functions/Posts';

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
    tdee: 0,
  },

  setHWA: (values) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        height: values.height,
        weight: values.weight,
        age: values.age,
      },
    })),
  setNewAge: (id, value) => {
    set(
      produce((state) => {
        state.assessment.age = value;
        storeData(id, state.assessment);
      })
    );
  },
  setNewHeight: (id, value) => {
    set(
      produce((state) => {
        state.assessment.height = value;
        storeData(id, state.assessment);
      })
    );
  },
  setNewWeight: (id, value) => {
    set(
      produce((state) => {
        state.assessment.weight = value;
        storeData(id, state.assessment);
      })
    );
  },
  setNewBodyFat: (id, value) => {
    set(
      produce((state) => {
        state.assessment.bodyFat = value;
        storeData(id, state.assessment);
      })
    );
  },
  setNewWorkActivity: (id, value) => {
    set(
      produce((state) => {
        state.assessment.workActivity = value;
        storeData(id, state.assessment);
      })
    );
  },
  setNewExerciseActivity: (id, value) => {
    set(
      produce((state) => {
        state.assessment.exerciseActivity = value;
        storeData(id, state.assessment);
      })
    );
  },
  setNewTDEE: (id, tdee) => {
    set(
      produce((state) => {
        state.assessment.tdee = tdee;
        storeData(id, state.assessment);
      })
    );
  },
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
  setTDEE: (value) =>
    set((state) => ({
      assessment: {
        ...state.assessment,
        tdee: value,
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
        tdee: values.tdee,
      },
    })),
  resetState: () => {
    set({
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
        tdee: 0,
      },
    });
  },
}));

export default useStore;
