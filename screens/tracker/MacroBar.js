import { View } from 'react-native';
import { useEffect } from 'react';
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
  const {
    tracker,
    goalProtein,
    goalCarbs,
    goalFat,
    goalCalories,
    updateGoalProtein,
    updateGoalCarbs,
    updateGoalFat,
    updateGoalCalories,
  } = trackerState;
  const threeDayLogState = useThreeDayLogStore();
  const { complete, threeDayLog } = threeDayLogState;
  const settingsState = useSettingsStore();
  const { idealCarbs, idealProtein, idealFat } = settingsState.macroSettings;

  const { tdee } = state.assessment;

  const iProtein = idealMacro(tdee, 'protein', parseFloat(idealProtein) / 100);
  const iFat = idealMacro(tdee, 'fat', parseFloat(idealFat) / 100);
  const iCarbs = idealMacro(tdee, 'carbs', parseFloat(idealCarbs) / 100);

  useEffect(() => {
    // 3 Day Log Incomplete
    if (complete === false) {
      updateGoalProtein(0);
      updateGoalCarbs(0);
      updateGoalFat(0);
      updateGoalCalories(0);
    }
    // 3 Day Log Complete, but insufficient data to update goals from tracker.
    if (complete === true && tracker.length < 7) {
      const averages = macroAverage(threeDayLog);
      const { avgProtein, avgCarbs, avgFats } = averages;
      updateGoalProtein(macroGoal(Number(iProtein), Number(avgProtein), 'protein'));
      updateGoalCarbs(macroGoal(Number(iCarbs), Number(avgCarbs), 'carbs'));
      updateGoalFat(macroGoal(Number(iFat), Number(avgFats), 'fat'));
      updateGoalCalories(
        calculateGoalCalories(iProtein, iCarbs, iFat, avgProtein, avgCarbs, avgFats)
      );
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
      updateGoalProtein(macroGoal(Number(iProtein), Number(avgProtein), 'protein'));
      updateGoalCarbs(macroGoal(Number(iCarbs), Number(avgCarbs), 'carbs'));
      updateGoalFat(macroGoal(Number(iFat), Number(avgFats), 'fat'));
      updateGoalCalories(
        calculateGoalCalories(iProtein, iCarbs, iFat, avgProtein, avgCarbs, avgFats)
      );
    }
  }, [iProtein, iCarbs, iFat]);

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
        <MacroPie macro={carbs} complete={complete} goal={goalCarbs} label="Carbs" />
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
