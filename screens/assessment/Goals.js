import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import { Text } from "@rneui/themed";
import CustomCheckBox from '../../components/CustomCheckBox';


function Goals({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
            Which of these goals would you like to get out of this experience?
          </Text>
          <Text>
            Check all that apply:
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="Increase metabolic rate"/>
            <CustomCheckBox title="Have steady energy throughout the day"/>
            <CustomCheckBox title="Lose weight"/>
            <CustomCheckBox title="Increase the calories I eat without gaining weight"/>
            <CustomCheckBox title="Increase muscle mass"/>
            <CustomCheckBox title="Food Freedom (Free of tracking my food, and be able to intuitively eat"/>
          </View>

          <Input label='Write in your own goal' style={{ margin: "auto", width: "80%" }}/>
            <StandardButton title="Submit" onPress={() => alert('Success!')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Goals;
