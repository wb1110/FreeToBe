import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import { COLORS } from '../constants'

const StyledText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

const CustomText = (props) => (
    <StyledText>
      {props.children}
    </StyledText>
);



export default CustomText;