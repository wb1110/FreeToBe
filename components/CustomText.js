import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const CustomText = (props) => (
    <Text style={{ color: COLORS.primary, fontSize: 20 }}>
      {props.children}
    </Text>
);



export default CustomText;