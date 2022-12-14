import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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

export const getByFDCID = (
  fdcId,
  meal,
  day,
  item,
  foodPortionsData,
  setFoodPortionsData,
  navigation
) => {
  axios
    .get(
      `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=QGFVnH9V6cq73KFQNwa5ckdhM1dIbifXkZx7rFzZ`
    )
    .then((res) => {
      setFoodPortionsData([]);
      res.data.foodPortions.map((i) => {
        if (i.measureUnit.name === 'undetermined') {
          foodPortionsData.push(`${i.amount} ${i.modifier}`);
        } else if (!i.modifier) {
          foodPortionsData.push(`${i.amount} ${i.measureUnit.name}`);
        } else {
          foodPortionsData.push(`${i.amount} ${i.measureUnit.name} ${i.modifier}`);
        }
      });
      navigation.navigate('EditFoodManually', {
        meal,
        day,
        item,
        foodPortionsData,
      });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
