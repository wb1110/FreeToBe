import { View } from 'react-native';
import React from 'react';
import { Text, useTheme } from '@rneui/themed';

export default function MacroDetails({ route }) {
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
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text h4 h4Style={{ color: '#519085', fontSize: 24 }}>
          {idealProtein}
        </Text>
        <Text h4 h4Style={{ fontSize: 32 }}>
          {protein} g
        </Text>
        <Text style={{ fontSize: 24 }}>Protein</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text h4 h4Style={{ color: '#E9E0AC', fontSize: 24 }}>
          {idealCarbs}
        </Text>
        <Text h4 h4Style={{ fontSize: 32 }}>
          {carb} g
        </Text>
        <Text style={{ fontSize: 24 }}>Carbs</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text h4 h4Style={{ color: '#88CED2', fontSize: 24 }}>
          {idealFat}
        </Text>
        <Text h4 h4Style={{ fontSize: 32 }}>
          {fat} g
        </Text>
        <Text style={{ fontSize: 24 }}>Fat</Text>
      </View>
    </View>
  );
}
