import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeSettings } from './Posts';

export const getAssessment = async (state) => {
  let userAssessment;
  try {
    const assessment = await AsyncStorage.getItem('assessment');
    userAssessment = JSON.parse(assessment);
    state.setAssessment(userAssessment);
  } catch (e) {
    return e;
  }
  return userAssessment;
};

export const getTracker = async (state) => {
  let parsedResult;
  try {
    const result = await AsyncStorage.getItem('tracker');
    parsedResult = await JSON.parse(result);
    state.updateTracker(parsedResult);
  } catch (e) {
    return e;
  }
  return parsedResult;
};

export const getThreeDayLog = async (state) => {
  let parsedResult;
  try {
    const result = await AsyncStorage.getItem('threeDayLog');
    parsedResult = await JSON.parse(result);
    state.updateThreeDayLog(parsedResult);
    if (parsedResult.length === 3) {
      state.updateCompletion();
    }
  } catch (e) {
    return e;
  }
  return parsedResult;
};

export const getSettings = async (state) => {
  let parsedResult;
  try {
    const result = await AsyncStorage.getItem('settings');
    parsedResult = await JSON.parse(result);
    if (parsedResult) {
      state.updateSettings(parsedResult);
    } else {
      storeSettings({
        idealProtein: '30%',
        idealCarbs: '40%',
        idealFat: '30%',
      });
    }
  } catch (e) {
    return e;
  }
  return parsedResult;
};
