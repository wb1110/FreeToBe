import { View, Text, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import React from 'react';

import { COLORS } from '../constants/theme.js';

function FocusedStatusBar() {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated barStyle="dark-content" /> : null;
}

export default FocusedStatusBar;
