import { View } from 'react-native'
import { Input , Text } from "@rneui/themed";
import React, { useState } from 'react'
import RoundButton from "./Buttons/RoundButton";
import StandardButton from "./Buttons/StandardButton";
import Container from "./Container";

function IsPregnant({ navigation }) {
  const [babies, setBabies] = useState(0);
  return (
    <Container>
      <Container>
      <Text>
        How many babies are you carrying?
      </Text>
      <View style={{ flexDirection: 'row' }}>
        {babies === 1 ? <RoundButton title="1" type="clear" onPress={() => setBabies(1)}/> : <RoundButton title="1" onPress={() => setBabies(1)}/>}
        {babies === 2 ? <RoundButton title="2" type="clear" onPress={() => setBabies(2)}/> : <RoundButton title="2" onPress={() => setBabies(2)}/>}
        {babies === 3 ? <RoundButton title="3" type="clear" onPress={() => setBabies(3)}/> : <RoundButton title="3" onPress={() => setBabies(3)}/>}
        {babies === 4 ? <RoundButton title="4" type="clear" onPress={() => setBabies(4)}/> : <RoundButton title="4" onPress={() => setBabies(4)}/>}
        {babies === 5 ? <RoundButton title="5" type="clear" onPress={() => setBabies(5)}/> : <RoundButton title="5" onPress={() => setBabies(5)}/>}
        {babies === 6 ? <RoundButton title="6" type="clear" onPress={() => setBabies(6)}/> : <RoundButton title="6" onPress={() => setBabies(6)}/>}
      </View>
      <Input label='What is your due date?' />
    </Container>
    <Container>
      <StandardButton title="Submit" onPress={() => {navigation.navigate('Nursing')}}/>
    </Container>
    </Container>
  )
}

export default IsPregnant