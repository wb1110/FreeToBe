import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { useTheme } from "@rneui/themed";

export default function LArrowButton(props) {
  const { theme } = useTheme();

  return (
      <Ionicons name="arrow-back-circle" color={theme.colors.primary} size={48} onPress={props.onPress}/>
  )
};