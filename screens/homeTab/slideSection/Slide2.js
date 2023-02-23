import { View, Text } from 'react-native';
import React from 'react';
import ProgressBar from './ProgressBar';

export default function Slide2({
  calories,
  goalCalories,
  protein,
  goalProtein,
  carbs,
  fats,
  goalCarbs,
  goalFat,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ padding: 20 }}>
          <ProgressBar
            color="#B65C3D"
            title="Energy"
            unit="kCal"
            consumed={calories}
            goal={goalCalories}
            maxWidth={300}
          />
          <ProgressBar
            color="#283618"
            title="Protein"
            unit="g"
            consumed={protein}
            goal={goalProtein}
            maxWidth={300}
          />
          <ProgressBar
            color="#F5F5DC"
            title="Carbs"
            unit="g"
            consumed={carbs}
            goal={goalCarbs}
            maxWidth={300}
          />
          <ProgressBar
            color="#800020"
            title="Fats"
            unit="g"
            consumed={fats}
            goal={goalFat}
            maxWidth={300}
          />
        </View>
      </View>
    </View>
  );
}
