import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import Container from '../../components/Container';
import TextContainer from '../../components/TextContainer';

function LieSkinny3({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TextContainer>
            Your 3 day assessment tracking will be used to pave a realistic path to achieve your
            health goals
            {'\n'}
            {'\n'}
            It is common for women to eat differently during the week than on a weekend. Therefore,
            we ask that one day of tracking is reflective of a weekend day of eating.
          </TextContainer>
          <View style={{ flexDirection: 'row' }}>
            <LArrowButton onPress={() => navigation.goBack()} />
            <RArrowButton title="Submit" onPress={() => navigation.navigate('LieSkinny4')} />
          </View>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default LieSkinny3;
