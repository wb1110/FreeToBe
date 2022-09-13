import { Input } from "@rneui/themed";
import { useState } from "react";
import Container from '../../../components/Container'

function ThreeSite({ skinfolds, setSkinfolds }) {
  const [threeSite, setThreeSite] = useState({
    abdominal: 0,
    triceps: 0,
    suprailiac: 0,
  })
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const fieldName = e.label;
    setThreeSite({
      [fieldName]: value
    })
  }
  return (
    <Container>
      <Input label='Abdominal' fieldName='abdominal' value={threeSite.abdominal} onChange={handleChange}/>
      <Input label='Triceps' />
      <Input label='Suprailiac' />
    </Container>
  )
}

export default ThreeSite