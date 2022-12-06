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
import useSettingsStore from '../../state/SettingsStore';

export default function MacroBar({ protein, carbs, fats, calories }) {
  const state = useStore();
  const trackerState = useTrackerStore();
  const { tracker } = trackerState;
  const threeDayLogState = useThreeDayLogStore();
  const { complete, threeDayLog } = threeDayLogState;
  const settingsState = useSettingsStore();
  const { idealCarbs, idealProtein, idealFat } = settingsState.macroSettings;

  const { tdee } = state.assessment;

  const iProtein = idealMacro(tdee, 'protein', parseFloat(idealProtein) / 100);
  const iFat = idealMacro(tdee, 'fat', parseFloat(idealFat) / 100);
  const iCarbs = idealMacro(tdee, 'carbs', parseFloat(idealCarbs) / 100);

  let goalProtein;
  let goalCarb;
  let goalFat;
  let goalCalories;

  // 3 Day Log Incomplete
  if (complete === false) {
    goalProtein = 0;
    goalCarb = 0;
    goalFat = 0;
    goalCalories = 0;
  }
  // 3 Day Log Complete, but insufficient data to update goals from tracker.
  if (complete === true && tracker.length < 7) {
    const averages = macroAverage(threeDayLog);
    const { avgProtein, avgCarbs, avgFats } = averages;
    goalProtein = macroGoal(Number(iProtein), Number(avgProtein), 'protein');
    goalCarb = macroGoal(Number(iCarbs), Number(avgCarbs), 'carbs');
    goalFat = macroGoal(Number(iFat), Number(avgFats), 'fat');
    goalCalories = calculateGoalCalories(iProtein, iCarbs, iFat, avgProtein, avgCarbs, avgFats);
  }

  // 3 Day Log Complete, and sufficient data to update goals from tracker.
  if (complete === true && tracker.length >= 7) {
    const convertDate = tracker.map((obj) => {
      if (obj.calories > 0) return { ...obj, date: new Date(obj.date) };
    });
    const sortedDesc = convertDate.sort((objA, objB) => Number(objB.date) - Number(objA.date));
    const lastSevenDays = sortedDesc.slice(0, 7);
    const averages = macroAverage(lastSevenDays);
    const { avgProtein, avgCarbs, avgFats } = averages;
    goalProtein = macroGoal(Number(iProtein), Number(avgProtein), 'protein');
    goalCarb = macroGoal(Number(iCarbs), Number(avgCarbs), 'carbs');
    goalFat = macroGoal(Number(iFat), Number(avgFats), 'fat');
    goalCalories = calculateGoalCalories(iProtein, iCarbs, iFat, avgProtein, avgCarbs, avgFats);
  }

  // const goalProtein = Math.round((TDEE * 0.3) / 4);
  // const goalCarb = Math.round((TDEE * 0.4) / 4);
  // const goalFat = Math.round((TDEE * 0.3) / 4);

  /*
  
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
