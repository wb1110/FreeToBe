import { Text } from "@rneui/themed";
import { useState } from "react";
import { View } from 'react-native';
import StandardButton from "./Buttons/StandardButton";
import Container from "./Container";


function IsNursing({ navigation }) {
  const [partum, setPartum] = useState(0);
  return (
      <Container>
        <Container>
          <Text>
            Are you...
          </Text>
          <View>
            {partum === 1 ? <StandardButton title="0-6 months postpartum" type="clear" onPress={() => setPartum(1)}/> : <StandardButton title="0-6 months postpartum" onPress={() => setPartum(1)}/>}
            {partum === 2 ? <StandardButton title="7+ months postpartum" type="clear" onPress={() => setPartum(2)}/> : <StandardButton title="7+ months postpartum" onPress={() => setPartum(2)}/>}
          </View>
        </Container>
        <Container>
          <StandardButton title="Submit" onPress={() => {navigation.navigate('Goals')}}/>
        </Container>
      </Container>
  );
}

export default IsNursing;
