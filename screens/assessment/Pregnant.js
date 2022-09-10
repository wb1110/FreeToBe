import { useState } from "react";
import { SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import LArrowButton from '../../components/Buttons/LArrowButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import NarrowButton from "../../components/Buttons/NarrowButton";
import IsPregnant from "../../components/IsPregnant";


function Pregnant({ navigation }) {
  const [pregnant, setPregnant] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Container>
            <Text>
              Are you currently pregnant?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <NarrowButton title="Yes" onPress={() => setPregnant(true)}/>
              <NarrowButton title="No" onPress={() => {setPregnant(false); navigation.navigate('Nursing')}}/>
            </View>
          </Container>
          {pregnant ? <IsPregnant navigation={navigation}/> : null }
          <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Pregnant;