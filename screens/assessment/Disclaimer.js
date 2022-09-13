import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from "../../components/TextContainer";


function Disclaimer({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <TextContainer>
          Disclaimer - If you do not know where you are, you can not know where you are going. We know that tracking your food can have a negative effect on some women but to get started, we need 3 days of your eating habits to set your goals so you never have to track again. There are no restrictions or requirements for what you enter. What you eat is neither good nor bad, but it will help us know how to guide you to intuitive eating and food freedom.
          </TextContainer>
          <View style={{ flexDirection: 'row' }}>
            <LArrowButton onPress={() => navigation.goBack()}/>
            <RArrowButton title="Submit" onPress={() => navigation.navigate('AbleToTrack')} />
          </View>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Disclaimer;
