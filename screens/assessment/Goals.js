import { SafeAreaView , View } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import CustomCheckBox from '../../components/CustomCheckBox';


function Goals({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          Which of these goals would you like to get out of this experience?
        </CustomText>
        <CustomText>
          Check all that apply:
        </CustomText>
        <View style={{ alignItems: "flex-start"}}>
          <CustomCheckBox title="Increase metabolic rate"/>
          <CustomCheckBox title="Have steady energy throughout the day"/>
          <CustomCheckBox title="Lose weight"/>
          <CustomCheckBox title="Increase the calories I eat without gaining weight"/>
          <CustomCheckBox title="Increase muscle mass"/>
          <CustomCheckBox title="Food Freedom (Free of tracking my food, and be able to intuitively eat"/>
          <CustomCheckBox title="Write in your own goal"/>
        </View>
          <StandardButton title="Submit" onPress={() => alert('Success!')} />
          <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default Goals;
