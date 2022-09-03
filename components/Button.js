import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';

function Button({ onPress, title }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', borderRadius: '25px', padding: '2%',
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
