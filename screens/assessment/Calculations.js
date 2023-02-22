import moment from 'moment/moment';
import useStore from '../../state/Store';

export default function useCalculations() {
  const state = useStore();
  const { bodyFat, weight, height, age, dueDate, exerciseActivity, workActivity, babies, nursing } =
    state.assessment;
  let TDEE;
  let pregnancyCalories = 0;
  const babyCalories = () => {
    if (babies > 1) {
      if (babies === 2) {
        pregnancyCalories = 300;
      }
      if (babies === 3) {
        pregnancyCalories = 600;
      }
      if (babies === 4) {
        pregnancyCalories = 900;
      }
      if (babies === 5) {
        pregnancyCalories = 1200;
      }
      if (babies === 6) {
        pregnancyCalories = 1500;
      }
    }
    return pregnancyCalories;
  };

  const activityMultiplier = () => {
    let multiplier;
    // Sedentary
    if (exerciseActivity === 1 && workActivity <= 2) {
      multiplier = 1.2;
      return multiplier;
    }
    // Liight
    if (exerciseActivity === 1 && workActivity === 3) {
      multiplier = 1.375;
      return multiplier;
    }
    if (exerciseActivity === 2 && workActivity <= 2) {
      multiplier = 1.375;
      return multiplier;
    }
    // Moderate
    if (exerciseActivity === 2 && workActivity === 3) {
      multiplier = 1.55;
      return multiplier;
    }
    if (exerciseActivity === 3 && workActivity <= 2) {
      multiplier = 1.55;
      return multiplier;
    }
    // Very
    if (exerciseActivity === 3 && workActivity === 3) {
      multiplier = 1.725;
      return multiplier;
    }
    if (exerciseActivity === 4 && workActivity === 1) {
      multiplier = 1.725;
      return multiplier;
    }
    // Extreme
    if (exerciseActivity === 4 && workActivity >= 2) {
      multiplier = 1.9;
      return multiplier;
    }
    if (exerciseActivity < 4 && workActivity === 4) {
      multiplier = 1.9;
      return multiplier;
    }
    return multiplier;
  };

  // 1 = No exercise / activity
  // 2 = Light exercise / Moderate
  // 3 = Moderate / Very Active
  // 4 = Extreme

  const energyEquations = () => {
    const heightSplit = height.split('ft ');
    const feet = heightSplit[0];
    const inches = heightSplit[1];
    const totalInches = parseFloat(feet) * 12 + parseFloat(inches);
    if (!bodyFat) {
      const BMR = 10 * (weight * 0.45359237) + 6.25 * (totalInches * 2.54) - 5 * age - 161;
      TDEE = BMR * activityMultiplier();
      return TDEE;
    }
    const FBM = weight * 0.45359237 * (bodyFat / 100);
    const LBM = weight * 0.45359237 - FBM;
    TDEE = 370 + 21.6 * LBM;
    return TDEE;
  };

  const weeksDifference = Math.ceil(moment(dueDate).diff(moment(), 'days') / 7);
  const trimester = (number) => {
    let result = '';
    if (number <= 9) {
      result = 450;
      return result;
    }
    if (number <= 23 && number > 9) {
      result = 340;
      return result;
    }
    if (number > 23) {
      result = 0;
      return result;
    }
    return result;
  };

  const maintenanceCal = Math.round(
    energyEquations() + (dueDate ? trimester(weeksDifference) : 0) + babyCalories() + nursing
  );
  return maintenanceCal;
}
