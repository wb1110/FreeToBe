import { View } from 'react-native'
import { Text } from "@rneui/themed";
import React from 'react'
import useStore from '../state/Store'
import TextContainer from '../components/TextContainer';
import Container from '../components/Container';

export default function UserHome() {
  const state = useStore();
  return (
    <Container>
    <TextContainer>
      Height: {state.assessment.height}
    </TextContainer>
    <TextContainer>
      Weight: {state.assessment.weight}
    </TextContainer>
    <TextContainer>
      Age: {state.assessment.age}
    </TextContainer>
    <TextContainer>
      Body Fat: {state.assessment.bodyFat}
    </TextContainer>
    </Container>
  )
}