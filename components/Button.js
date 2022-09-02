import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Button = (props) => (
    <TouchableOpacity style={{ backgroundColor: COLORS.secondary, alignItems:"center", justifyContent:"center", borderRadius:"25px", padding:"2%" }} onPress={() => alert('Hello, world!')}>
      <Text>{props.children}</Text>
    </TouchableOpacity>
);

export default Button;