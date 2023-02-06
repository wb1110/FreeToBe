import { View } from 'react-native';
import React from 'react';
import { SearchBar, Text, useTheme } from '@rneui/themed';

export default function Status403() {
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text h3>Error Status Code: 403</Text>
      <Text h3>Please contact support!</Text>
    </View>
  );
}
