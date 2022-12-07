import { Text } from '@rneui/themed';
import { View } from 'react-native';

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
        {percentage}
      </Text>
      <Text h4 h4Style={{ fontSize: 32 }}>
        {grams} g
      </Text>
      <Text style={{ fontSize: 24 }}>{nutrient}</Text>
    </View>
  );
}

export default function MacroDetails({ route }) {
  const { protein, carb, fat, idealFat, idealCarbs, idealProtein } = route.params;
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
        percentage={idealProtein}
        grams={protein}
        nutrient="Protein"
      />
      <NutrientContainer color="#E9E0AC" percentage={idealCarbs} grams={carb} nutrient="Carbs" />
      <NutrientContainer color="#88CED2" percentage={idealFat} grams={fat} nutrient="Fat" />
    </View>
  );
}
