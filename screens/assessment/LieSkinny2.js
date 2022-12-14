import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import Container from '../../components/Container';
import TextContainer from '../../components/TextContainer';

function LieSkinny2({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TextContainer>
            Although this may be hard to do, please try your best to add everything you eat and
            drink for the next 3 days. Do not be concerned by the number of calories you are
            currently consuming during this time.
          </TextContainer>
          <View style={{ flexDirection: 'row' }}>
            <LArrowButton onPress={() => navigation.goBack()} />
            <RArrowButton title="Submit" onPress={() => navigation.navigate('LieSkinny3')} />
          </View>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default LieSkinny2;
