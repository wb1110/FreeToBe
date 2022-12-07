import { Text } from '@rneui/themed';
import { View } from 'react-native';
import useTrackerStore from '../../state/TrackerStore';

function NutrientContainer({ color, percentage, grams, nutrient }) {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text h4 h4Style={{ color, fontSize: 24 }}>
        {percentage}%
      </Text>
      <Text h4 h4Style={{ fontSize: 32 }}>
        {grams} g
      </Text>
      <Text style={{ fontSize: 24 }}>{nutrient}</Text>
    </View>
  );
}

export default function MacroDetails() {
  const trackerState = useTrackerStore();
  const { goalProtein, goalCarbs, goalFat, goalCalories } = trackerState;

  const carbPercent = (((goalCarbs * 4) / goalCalories) * 100).toFixed(2);
  const proteinPercent = (((goalProtein * 4) / goalCalories) * 100).toFixed(2);
  const fatPercent = (((goalFat * 9) / goalCalories) * 100).toFixed(2);
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <NutrientContainer
        color="#519085"
        percentage={proteinPercent}
        grams={goalProtein}
        nutrient="Protein"
      />
      <NutrientContainer
        color="#E9E0AC"
        percentage={carbPercent}
        grams={goalCarbs}
        nutrient="Carbs"
      />
      <NutrientContainer color="#88CED2" percentage={fatPercent} grams={goalFat} nutrient="Fat" />
    </View>
  );
}
