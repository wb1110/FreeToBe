import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import { COLORS } from '../constants'

export const StyledView = styled.View`
  flex: 1,
  backgroundColor: ${COLORS.primary},
  alignItems: 'center',
  justifyContent: 'center',
`;

const Container = (props) => {
    <View style={StyledView}>
      {props.children}
    </View>
};



export default Container;