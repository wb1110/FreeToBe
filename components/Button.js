import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

function Button(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', borderRadius: '25px', padding: '2%',
      }}
      onPress={() => alert('Hello, world!')}
    >
      <Text style={{ color: COLORS.secondary }}>{props.children}</Text>
    </TouchableOpacity>
  );
}

export default Button;
