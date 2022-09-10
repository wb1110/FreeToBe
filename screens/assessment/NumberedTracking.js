import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';


function NumberedTracking({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
          Do you enjoy having specific measurable numbers to hit when you track your food?”
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="Absolutely, I need numbers to feel like I am meeting my goal"/>
            <CustomCheckBox title="I can use them, but it is more of a guide"/>
            <CustomCheckBox title="No, I do not like the restriction of tracking or tracking is not good for me"/>
          </View>
            <StandardButton title="Submit" onPress={() => navigation.navigate('Disclaimer')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default NumberedTracking;
