import { View, Text } from 'react-native';
import moment from 'moment/moment';
import useStore from '../../state/Store';

export default function Calculations() {
  const state = useStore();
  const { bodyFat, weight, height, age, dueDate, activity } = state.assessment;
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
      const TDEE = BMR * activity;
      return TDEE;
    }
    const FBM = weight * 0.45359237 * (bodyFat / 100);
    const LBM = weight * 0.45359237 - FBM;
    const TDEE = 370 + 21.6 * LBM;

    return TDEE;
  };

  const weeksDifference = Math.ceil(moment(dueDate).diff(moment(), 'days') / 7);
  const trimester = (number) => {
    let result = '';
    if (number <= 9) {
      result = 'Third';
      return result;
    }
    if (number <= 23 && number > 9) {
      result = 'Second';
      return result;
    }
    if (number > 23) {
      result = 'First';
      return result;
    }
    return result;
  };

  return (
    <View>
      <Text>TDEE: {energyEquations()}</Text>
      <Text>Trimester: {trimester(weeksDifference)}</Text>
    </View>
  );
}
