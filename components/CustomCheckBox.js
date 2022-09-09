import { StyleSheet, Text, View } from 'react-native'
import { CheckBox } from "@rneui/themed";
import React, { useState } from 'react'

const CustomCheckBox = (props) => {
  const [check, setCheck] = useState(false);
  const { title } = props;
  return (
      <CheckBox center title={title} checked={check} onPress={() => setCheck(!check)}/>
  )
}

export default CustomCheckBox