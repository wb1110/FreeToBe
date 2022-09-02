import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

function CustomText(props) {
  return (
    <Text style={{ color: COLORS.primary, fontSize: 20 }}>
      {props.children}
    </Text>
  );
}

export default CustomText;
