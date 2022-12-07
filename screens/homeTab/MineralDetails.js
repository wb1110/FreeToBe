import { View } from 'react-native';
import React from 'react';
import { Text, useTheme } from '@rneui/themed';

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

export default function MineralDetails({ route }) {
  const { protein, carb, fat, idealFat, idealCarbs, idealProtein } = route.params;
  const { theme } = useTheme();
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
