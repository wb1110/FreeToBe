import { Input } from "@rneui/themed";
import Container from '../../../components/Container'

function FourSite() {
  return (
    <Container>
      <Input label='Abdominal' />
      <Input label='Triceps' />
      <Input label='Thigh' />
      <Input label='Suprailiac' />
    </Container>
  )
}

export default FourSite