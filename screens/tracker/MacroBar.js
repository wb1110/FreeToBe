import { View } from 'react-native';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import MacroPie from './MacroPie';

export default function MacroBar({ protein, carbs, fats, calories }) {
  const state = useStore();
  const threeDayLogState = useThreeDayLogStore();
  const { complete } = threeDayLogState;
  const TDEE = state.assessment.tdee;

  let goalProtein;
  let goalCarb;
  let goalFat;
  let goalCalories;

  if (complete === false) {
    goalProtein = 0;
    goalCarb = 0;
    goalFat = 0;
    goalCalories = 0;
  }
  // const goalProtein = Math.round((TDEE * 0.3) / 4);
  // const goalCarb = Math.round((TDEE * 0.4) / 4);
  // const goalFat = Math.round((TDEE * 0.3) / 4);

  /*
  
  if there are no 3 day log goals, then have the pie charts start at zero and increase in value as foods are added
  if tracker array is less than 7, then use 3 day log goals
  if tracker array is 7 or more, sort by date and use the 7 most recent dates to calculate the goals for that day

*/
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        margin: '2%',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={protein} complete={complete} goal={goalProtein} label="Protein" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={fats} complete={complete} goal={goalFat} label="Fat" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={carbs} complete={complete} goal={goalCarb} label="Carbs" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={calories} complete={complete} goal={goalCalories} label="Calories" />
      </View>
    </View>
  );
}
