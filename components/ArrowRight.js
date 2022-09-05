import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ArrowRight ({ navigation }) {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
      <Ionicons name="arrow-forward-circle" size={48} color={COLORS.primary} />
    </TouchableOpacity>
  );
}

export default ArrowRight ;