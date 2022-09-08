import { Button } from "@rneui/themed";
import React from 'react'

export default function RoundButton(props) {

  return (
    <Button title={props.title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 45,
      marginHorizontal: 10,
      marginVertical: 10,
    }} 
    type={props.type}
    onPress={props.onPress}
    />
  )
}