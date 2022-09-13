import { Input } from "@rneui/themed";
import Container from '../../../components/Container'
import StandardButton from "../../../components/Buttons/StandardButton";

function FourSite() {
  return (
    <Container>
      <Input label='Abdominal' />
      <Input label='Triceps' />
      <Input label='Thigh' />
      <Input label='Suprailiac' />
      <StandardButton title="Submit" onPress={() => alert('success!')}/>
    </Container>
  )
}

export default FourSite