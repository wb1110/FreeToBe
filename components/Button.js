import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import { COLORS } from '../constants'

const StyledButton = styled.TouchableOpacity`
  background-color: ${COLORS.secondary}
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 2%;
`;

const Button = (props) => (
    <StyledButton onPress={() => alert('Hello, world!')}>
      <Text>{props.children}</Text>
    </StyledButton>
);



export default Button;