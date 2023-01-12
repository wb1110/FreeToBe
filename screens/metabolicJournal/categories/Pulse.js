/* eslint-disable global-require */
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/base';
import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Pulse({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Pulse</Text>
        <View style={{ flex: 1 }}>
          <Input
            label="Enter morning pulse here"
            onChangeText={(value) =>
              setMetabolicData({
                ...metabolicData,
                pulse: value,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}
