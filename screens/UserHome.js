import React from 'react';
import Container from '../components/Container';
import TextContainer from '../components/TextContainer';
import useStore from '../state/Store';

export default function UserHome() {
  const state = useStore();
  console.log(state.assessment);
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
      Body Fat: {Math.round(state.assessment.bodyFat * 100) / 100}
    </TextContainer>
    </Container>
  )
}