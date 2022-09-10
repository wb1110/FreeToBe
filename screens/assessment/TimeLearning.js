import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';


function TimeLearning({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
          Based on your answers, we need to ask a couple more questions. How many minutes a day would you like to sprend learning more about nutrition?
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="1-5 minutes"/>
            <CustomCheckBox title="6-10 minutes"/>
            <CustomCheckBox title="11-20 minutes"/>
            <CustomCheckBox title="30 minutes+"/>
          </View>
            <StandardButton title="Submit" onPress={() => navigation.navigate('NumberedTracking')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default TimeLearning;
