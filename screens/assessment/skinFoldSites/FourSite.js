import { Input } from "@rneui/themed";
import Container from '../../../components/Container'
import StandardButton from "../../../components/Buttons/StandardButton";

function FourSite() {
  return (
    <Container>
      <Input inputContainerStyle={{ borderColor:'white' }} label='Abdominal' />
      <Input inputContainerStyle={{ borderColor:'white' }} label='Triceps' />
      <Input inputContainerStyle={{ borderColor:'white' }} label='Thigh' />
      <Input inputContainerStyle={{ borderColor:'white' }} label='Suprailiac' />
      <StandardButton title="Submit" onPress={() => alert('success!')}/>
    </Container>
  )
}

export default FourSite