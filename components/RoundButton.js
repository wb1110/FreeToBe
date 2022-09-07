import { Button, useTheme } from "@rneui/themed";
import React from 'react'

export default function RoundButton() {
  const { theme } = useTheme();

  return (
    <Button title="3" buttonStyle={{
      backgroundColor: theme.primary,
      borderWidth: 2,
      borderColor: theme.primary,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 45,
      marginHorizontal: 10,
      marginVertical: 10,
    }} 
    />
  )
}