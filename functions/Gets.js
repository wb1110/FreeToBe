import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { storeSettings } from './Posts';
import useSettingsStore from '../state/SettingsStore';
import useTrackerStore from '../state/TrackerStore';
import useThreeDayLogStore from '../state/ThreeDayLogStore';
import useMetabolicStore from '../state/MetabolicStore';
import useStore from '../state/Store';
import useAuthStore from '../state/AuthStore';

export const getAssessment = async (id, state) => {
  let userAssessment;
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    const currentUser = JSON.parse(jsonValue);
    if (currentUser.assessment) {
      state.setAssessment(currentUser.assessment);
    }
  } catch (e) {
    return e;
  }
  return userAssessment;
};

export const getTracker = async (id, state) => {
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    const currentUser = await JSON.parse(jsonValue);
    state.updateTracker(currentUser.tracker.tracker);
    state.updateGoalProtein(currentUser.tracker.goalProtein);
    state.updateGoalCarbs(currentUser.tracker.goalCarbs);
    state.updateGoalCalories(currentUser.tracker.goalCalories);
    state.updateGoalFat(currentUser.tracker.goalFat);
  } catch (e) {
    return e;
  }
};

export const getThreeDayLog = async (id, state) => {
  let parsedResult;
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    const currentUser = await JSON.parse(jsonValue);
    state.updateThreeDayLog(currentUser.threeDayLog.threeDayLog);
    state.updateGoalProtein(currentUser.threeDayLog.goalProtein);
    state.updateGoalCarbs(currentUser.threeDayLog.goalCarbs);
    state.updateGoalCalories(currentUser.threeDayLog.goalCalories);
    state.updateGoalFat(currentUser.threeDayLog.goalFat);
    state.updateComplete(currentUser.threeDayLog.complete);
    if (currentUser.threeDayLog.threeDayLog.length === 3) {
      state.updateCompletion();
    }
  } catch (e) {
    return e;
  }
  return parsedResult;
};

export const getSettings = async (id, state) => {
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    const currentUser = await JSON.parse(jsonValue);
    if (currentUser.settings) {
      state.updateSettings(currentUser.settings);
    } else {
      storeSettings(id, {
        idealProtein: '30%',
        idealCarbs: '40%',
        idealFat: '30%',
      });
    }
  } catch (e) {
    return e;
  }
};

export const getMetabolicJournal = async (id, state) => {
  let parsedResult;
  try {
    const jsonValue = await AsyncStorage.getItem(id);
    const currentUser = await JSON.parse(jsonValue);
    if (currentUser.metabolicJournal) {
      state.updateState(currentUser.metabolicJournal);
    }
  } catch (e) {
    return e;
  }
  return parsedResult;
};

export const useGetAllData = () => {
  const state = useStore();
  const settingsState = useSettingsStore();
  const trackerState = useTrackerStore();
  const threeDayLogState = useThreeDayLogStore();
  const metabolicState = useMetabolicStore();
  const { id } = useAuthStore();

  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      getAssessment(id, state),
      getSettings(id, settingsState),
      getTracker(id, trackerState),
      getThreeDayLog(id, threeDayLogState),
      getMetabolicJournal(id, metabolicState),
    ])
      .then(() => {
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return isDataLoaded;
};
