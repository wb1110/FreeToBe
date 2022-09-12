import { Text } from "@rneui/themed";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';
import FocusedStatusBar from '../../components/FocusedStatusBar';


function ActivityLevel({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text h4>
          What is your activity level outside of work?
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="No exercise"/>
            <CustomCheckBox title="Light Exercise/Rec Sports (1-3x per week)"/>
            <CustomCheckBox title="Moderate Exercise/Sports (3-5x per week)"/>
            <CustomCheckBox title="Extreme Exercise (6-7x per week)"/>
          </View>
          <StandardButton title="Submit" onPress={() => navigation.navigate('WorkActivityLevel')} />
          <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default ActivityLevel;
