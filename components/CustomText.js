import React from 'react';
import { Text } from 'react-native';
import { COLORS } from '../constants';

function CustomText({ variant, children, ...props }) {
  const fontVariant = (variant) => {
    if(variant === 'h1') {
      return 21
    }
    if (!variant) {
      return 16
    }
    
  }

  return (
    <Text style={{ color: COLORS.primary, fontSize: fontVariant() }} {...props}>
      {children}
    </Text>
  );
}

export default CustomText;
