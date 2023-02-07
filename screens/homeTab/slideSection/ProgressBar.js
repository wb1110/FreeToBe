import { View } from 'react-native';
import { Button, LinearProgress, Text, useTheme } from '@rneui/themed';
import React from 'react';

export default function ProgressBar({ color, title, consumed, goal, unit }) {
  const percent = Math.round((consumed / goal) * 100);
  return (
    <View style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text h4>
          {title} - {consumed}
          {unit} / {goal}
          {unit}
        </Text>
        <Text h4>{percent}%</Text>
      </View>
      <View
        style={{
          borderColor: color,
          borderWidth: 2,
          width: 300,
          borderRadius: 20,
          height: 20,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: 150,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            height: 20,
          }}
        />
      </View>
    </View>
  );
}
