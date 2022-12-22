import AsyncStorage from '@react-native-async-storage/async-storage';

// Used in AbleToTrack.js and LieSkinny4.js
// eslint-disable-next-line consistent-return
export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('assessment', jsonValue);
  } catch (e) {
    // saving error
    return e;
  }
};

// Used in TrackerStore.js anytime meals or foods perform CRUD
// eslint-disable-next-line consistent-return
export const storeTracker = async (value) => {
  try {
    const filteredTracker = value.filter((day) => day.calories > 0);
    const jsonValue = JSON.stringify(filteredTracker);
    await AsyncStorage.setItem(`tracker`, jsonValue);
  } catch (e) {
    // saving error
    return e;
  }
};

// Used in LieSkinny4 and anytime meals or foods perform CRUD during the 3 days
// eslint-disable-next-line consistent-return
export const storeThreeDayLog = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`threeDayLog`, jsonValue);
  } catch (e) {
    // saving error
    return e;
  }
};

// eslint-disable-next-line consistent-return
export const storeSettings = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`settings`, jsonValue);
  } catch (e) {
    // saving error
    return e;
  }
};
