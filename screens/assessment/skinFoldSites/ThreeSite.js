import { Input } from "@rneui/themed";
import React from 'react'
import Container from '../../../components/Container'

const ThreeSite = () => {
  return (
    <Container>
      <Input label='Abdominal' />
      <Input label='Triceps' />
      <Input label='Suprailiac' />
    </Container>
  )
}

export default ThreeSite