import { View } from 'react-native';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import MacroPie from './MacroPie';
import {
  idealMacro,
  macroAverage,
  macroGoal,
  calculateGoalCalories,
} from '../../functions/GoalCalculator';
import useTrackerStore from '../../state/TrackerStore';

export default function MacroBar({ protein, carbs, fats, calories }) {
  const state = useStore();
  const trackerState = useTrackerStore();
  console.log(trackerState.tracker);
  const threeDayLogState = useThreeDayLogStore();
  const { complete, threeDayLog } = threeDayLogState;
  const { tdee } = state.assessment;

  const idealProtein = idealMacro(tdee, 'protein', 0.3);
  const idealFat = idealMacro(tdee, 'fat', 0.3);
  const idealCarbs = idealMacro(tdee, 'carbs', 0.4);

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
  // Need to add && tracker.length < 7
  if (complete === true) {
    const averages = macroAverage(threeDayLog);
    const { avgProtein, avgCarbs, avgFats } = averages;
    goalProtein = macroGoal(Number(idealProtein), Number(avgProtein), 'protein');
    goalCarb = macroGoal(Number(idealCarbs), Number(avgCarbs), 'protein');
    goalFat = macroGoal(Number(idealFat), Number(avgFats), 'protein');
    goalCalories = calculateGoalCalories(
      idealProtein,
      idealCarbs,
      idealFat,
      avgProtein,
      avgCarbs,
      avgFats
    );
  }
  // const goalProtein = Math.round((TDEE * 0.3) / 4);
  // const goalCarb = Math.round((TDEE * 0.4) / 4);
  // const goalFat = Math.round((TDEE * 0.3) / 4);

  /*
  
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
