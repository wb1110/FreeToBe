/* eslint-disable consistent-return */
import AsyncStorage from '@react-native-async-storage/async-storage';

// Used in AbleToTrack.js and LieSkinny4.js
export const storeData = async (id, value) => {
  if (id) {
    try {
      const jsonValue = JSON.stringify({ assessment: value });
      await AsyncStorage.mergeItem(id, jsonValue);
    } catch (e) {
      return e;
    }
  }
  return null;
};

// Used in TrackerStore.js anytime meals or foods perform CRUD
export const storeTracker = async (id, value) => {
  if (id) {
    try {
      const jsonValue = JSON.stringify({ tracker: value });
      await AsyncStorage.mergeItem(id, jsonValue);
    } catch (e) {
      return e;
    }
  }
  return null;
};

// Used in LieSkinny4 and anytime meals or foods perform CRUD during the 3 days
export const storeThreeDayLog = async (id, value) => {
  if (id) {
    try {
      const jsonValue = JSON.stringify({ threeDayLog: value });
      await AsyncStorage.mergeItem(id, jsonValue);
    } catch (e) {
      return e;
    }
  }
  return null;
};

export const storeSettings = async (id, value) => {
  if (id) {
    try {
      const jsonValue = JSON.stringify({ settings: value });
      await AsyncStorage.mergeItem(id, jsonValue);
    } catch (e) {
      return e;
    }
  }
  return null;
};

// Used when logging a journal
export const storeMetabolicJournal = async (id, value) => {
  if (id) {
    try {
      const jsonValue = JSON.stringify({ metabolicJournal: value });
      await AsyncStorage.mergeItem(id, jsonValue);
    } catch (e) {
      return e;
    }
  }
  return null;
};
