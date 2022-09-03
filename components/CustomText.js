import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

function CustomText({ variant, children, ...props }) {
  const fontVariant = (variant) => {
    if (!variant) {
      return 16
    }
  }

  return (
    <Text style={{ color: COLORS.primary, fontSize: 16 }} {...props}>
      {children}
    </Text>
  );
}

export default CustomText;
