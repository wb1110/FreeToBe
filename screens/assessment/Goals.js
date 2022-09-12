import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';
import TextContainer from '../../components/TextContainer';


function Goals({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <TextContainer>
            Which of these goals would you like to get out of this experience?
          </TextContainer>
          <Text h4>
            Check all that apply:
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="Increase metabolism"/>
            <CustomCheckBox title="Have steady energy throughout the day"/>
            <CustomCheckBox title="Lose weight"/>
            <CustomCheckBox title="Increase the calories I eat without gaining weight"/>
            <CustomCheckBox title="Increase muscle mass"/>
            <CustomCheckBox title="Food Freedom (Learn about the makeup of food and be able to intuitively eat)"/>
          </View>

          <Input label='Write in your own goal' style={{ margin: "auto", width: "80%" }}/>
            <StandardButton title="Submit" onPress={() => navigation.navigate('DietHistory')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Goals;
