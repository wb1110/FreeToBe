import { Button } from "@rneui/themed";
import React from 'react'

export default function RoundButton() {
  return (
    <Button title="3" buttonStyle={{
      backgroundColor: COLORS.primary,
      borderWidth: 2,
      borderColor: COLORS.primary,
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