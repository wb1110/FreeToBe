import React from 'react'
import StandardButton from '../../../components/Buttons/StandardButton'
import Container from '../../../components/Container'

export default function ThreeDay({ navigation }) {
  return (
    <Container>
      <StandardButton title='Day 1' onPress={() => navigation.navigate('Day1')}/>
      <StandardButton title='Day 2' onPress={() => navigation.navigate('Day2')} />
      <StandardButton title='Day 3' onPress={() => navigation.navigate('Day3')} />
    </Container>
  )
}