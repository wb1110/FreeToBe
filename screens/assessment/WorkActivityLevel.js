import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';


function WorkActivityLevel({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
          What is your activity level at work?
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="No activity - desk job with minimal movement"/>
            <CustomCheckBox title="Moderate - requires some movement (realtor, teacher, pastor, sales, some stay at home moms)"/>
            <CustomCheckBox title="Very active - requires physical activity (trainer, construction worker, stay at home mama with littles)"/>
            <CustomCheckBox title="Extremely active - professional/collegiate athlete"/>
          </View>
            <StandardButton title="Submit" onPress={() => navigation.navigate('Personality')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default WorkActivityLevel;
