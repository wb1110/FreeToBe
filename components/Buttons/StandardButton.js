import { Button } from "@rneui/themed";
import React from 'react'

export default function StandardButton(props) {

  return (
    <Button title={props.title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 200,
      marginHorizontal: 50,
      marginVertical: 10,
    }}
    onPress={props.onPress}
    />
  )
}