import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import React from 'react'
import { COLORS } from '../constants'

const StyledView = styled.View`
  flex: 1;
  background-color: ${COLORS.primary};
  align-items: center;
  justify-content: center;
`;

const Container = (props) => (
    <StyledView>
      {props.children}
    </StyledView>
);



export default Container;