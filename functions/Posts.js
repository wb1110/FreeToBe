/* eslint-disable consistent-return */
import AsyncStorage from '@react-native-async-storage/async-storage';

// Used in AbleToTrack.js and LieSkinny4.js
export const storeData = async (id, value) => {
  try {
    const jsonValue = JSON.stringify({ assessment: value });
    await AsyncStorage.mergeItem(id, jsonValue);
  } catch (e) {
    return e;
  }
};

// Used in TrackerStore.js anytime meals or foods perform CRUD
export const storeTracker = async (id, value) => {
  try {
    const filteredTracker = value.filter((day) => day.calories > 0);
    const jsonValue = JSON.stringify({ tracker: filteredTracker });
    await AsyncStorage.mergeItem(id, jsonValue);
  } catch (e) {
    return e;
  }
};

// Used in LieSkinny4 and anytime meals or foods perform CRUD during the 3 days
export const storeThreeDayLog = async (id, value) => {
  console.log(typeof id, 'store3day');
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(`threeDayLog`, jsonValue);
  } catch (e) {
    return e;
  }
};

export const storeSettings = async (id, value) => {
  console.log(id, 'storesettings');
  try {
    const jsonValue = JSON.stringify({ settings: value });
    await AsyncStorage.mergeItem(id, jsonValue);
  } catch (e) {
    return e;
  }
};

// Used when logging a journal
export const storeMetabolicJournal = async (id, value) => {
  console.log(typeof id, 'storemeta');
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.mergeItem(`metabolicJournal`, jsonValue);
  } catch (e) {
    return e;
  }
};
