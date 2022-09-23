import { Text } from '@rneui/themed';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';

function LieSkinny({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <TextContainer>
            Our society tells women eating fewer calories equals skinny beautiful women.
            {'\n'}
            {'\n'}
            <Text style={{ textAlign: 'center' }} h4>
              THIS IS A LIE!
            </Text>
            {'\n'}
            {'\n'}
            We have believed this lie the last several decades. {'\n'}
            Women need nourishment, carbohydrates, and joys around food to truly thrive.
          </TextContainer>

          <View style={{ flexDirection: 'row' }}>
            <LArrowButton onPress={() => navigation.goBack()} />
            <RArrowButton title="Submit" onPress={() => navigation.navigate('LieSkinny2')} />
          </View>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default LieSkinny;
