import { View, Text } from 'react-native'
import React from 'react'
import StandardButton from '../../../components/Buttons/StandardButton'
import Container from '../../../components/Container'

export default function ThreeDay() {
  return (
    <Container>
      <StandardButton title='Day 1' />
      <StandardButton title='Day 2' />
      <StandardButton title='Day 3' />
    </Container>
  )
}