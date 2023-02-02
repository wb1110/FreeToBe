import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

function InputButton({ buttonTitle, buttonIcon, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: 'center', marginLeft: '2%', width: 80, height: 90 }}
    >
      <View>{buttonIcon}</View>
      <Text style={{ textAlign: 'center' }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default InputButton;
