import { useState } from "react";
import { SafeAreaView, View } from 'react-native';
import { Input } from "@rneui/themed";
import LArrowButton from '../../components/Buttons/LArrowButton';
import RoundButton from '../../components/Buttons/RoundButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import NarrowButton from "../../components/Buttons/NarrowButton";


function Pregnant({ navigation }) {
  const [pregnant, setPregnant] = useState(1);
  const [babies, setBabies] = useState(1);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Container>
          <CustomText>
            Are you currently pregnant?
          </CustomText>
          <View style={{ flexDirection: 'row' }}>
            {pregnant === 1 ? <NarrowButton title="Yes" type="clear" onPress={() => setPregnant(1)}/> : <NarrowButton title="Yes" onPress={() => setPregnant(1)}/>}
            {pregnant === 2 ? <NarrowButton title="No" type="clear" onPress={() => setPregnant(2)}/> : <NarrowButton title="No" onPress={() => setPregnant(2)}/>}
          </View>
        </Container>
        <Container>
        <CustomText>
          How many babies are you carrying?
        </CustomText>
        <View style={{ flexDirection: 'row' }}>
          {babies === 1 ? <RoundButton title="1" type="clear" onPress={() => setBabies(1)}/> : <RoundButton title="1" onPress={() => setBabies(1)}/>}
          {babies === 2 ? <RoundButton title="2" type="clear" onPress={() => setBabies(2)}/> : <RoundButton title="2" onPress={() => setBabies(2)}/>}
          {babies === 3 ? <RoundButton title="3" type="clear" onPress={() => setBabies(3)}/> : <RoundButton title="3" onPress={() => setBabies(3)}/>}
          {babies === 4 ? <RoundButton title="4" type="clear" onPress={() => setBabies(4)}/> : <RoundButton title="4" onPress={() => setBabies(4)}/>}
          {babies === 5 ? <RoundButton title="5" type="clear" onPress={() => setBabies(5)}/> : <RoundButton title="5" onPress={() => setBabies(5)}/>}
          {babies === 6 ? <RoundButton title="6" type="clear" onPress={() => setBabies(6)}/> : <RoundButton title="6" onPress={() => setBabies(6)}/>}
        </View>
        </Container>
        <Container>
          <Input label='What is your due date?' />
        </Container>
        <Container>
          <StandardButton title="Submit" onPress={() => alert('success!')}/>
          <LArrowButton onPress={() => {navigation.navigate('BodyFatPercentage')}}/>
        </Container>
      </Container>
    </SafeAreaView>
  );
}

export default Pregnant;
