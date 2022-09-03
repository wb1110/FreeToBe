import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import { StatusBar } from 'react-native';


function FocusedStatusBar() {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated barStyle="dark-content" /> : null;
}

export default FocusedStatusBar;
