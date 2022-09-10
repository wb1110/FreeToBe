import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';


function Personality({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
          If you were to categorize yourself into 1 of the 4 types of people, which would it be?
          </Text>
          <View style={{ alignItems: "flex-start"}}>
            <CustomCheckBox title="Upholder-meets outer and inner expectations"/>
            <CustomCheckBox title="Obliger- meets outer expectations but resists inner expectations"/>
            <CustomCheckBox title="Questioner- resists outer expectations by meets inner expectations"/>
            <CustomCheckBox title="Rebel - resists inner and outer expectations"/>
          </View>
            <StandardButton title="Submit" onPress={() => navigation.navigate('TimeLearning')} />
            <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Personality;
