import { View } from 'react-native';
import useGoalUpdateConditions from '../../functions/goalUpdateConditions';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import useTrackerStore from '../../state/TrackerStore';
import MacroPie from './MacroPie';

export default function MacroBar({ protein, carbs, fats, calories }) {
  const trackerState = useTrackerStore();
  const { goalProtein, goalCarbs, goalFat, goalCalories } = trackerState;
  const threeDayLogState = useThreeDayLogStore();
  const { complete } = threeDayLogState;

  useGoalUpdateConditions(complete);

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
        <MacroPie macro={protein} complete={complete} goal={goalProtein} label="Protein" unit="g" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={fats} complete={complete} goal={goalFat} label="Fat" unit="g" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={carbs} complete={complete} goal={goalCarbs} label="Carbs" unit="g" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie
          macro={calories}
          complete={complete}
          goal={goalCalories}
          label="Calories"
          unit="cal"
        />
      </View>
    </View>
  );
}
