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

export default function MineralDetails() {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {/* <NutrientContainer color="white" percentage={idealCarbs} grams={carb} nutrient="Carbs" /> */}
      <Text h1>Under Construction</Text>
    </View>
  );
}
