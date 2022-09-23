import { View, Text } from 'react-native';
import moment from 'moment/moment';
import useStore from '../../state/Store';

export default function Calculations() {
  const state = useStore();
  const { bodyFat, weight, height, age, dueDate, activity, babies, nursing } = state.assessment;
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
  // const [state, setState] = useState({
  //   bodyFat: 15,
  //   height: 72,
  //   weight: 185,
  //   age: 33,
  //   dueDate: 20230524,
  //   babies: 1,
  //   nursing: 2,
  //   activity: 1.2,
  // });

  const energyEquations = () => {
    if (!bodyFat) {
      const BMR = 10 * (weight * 0.45359237) + 6.25 * (height * 2.54) - 5 * age - 161;
      TDEE = BMR * activity;
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

  const endGoal = Math.round(
    energyEquations() + (dueDate ? trimester(weeksDifference) : 0) + babyCalories() + nursing
  );

  return (
    <View>
      <Text>TDEE: {energyEquations()}</Text>
      <Text>End Goal: {`${endGoal}`}</Text>
    </View>
  );
}
