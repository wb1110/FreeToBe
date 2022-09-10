import { Text } from "@rneui/themed";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import RArrowButton from '../../components/Buttons/RArrowButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';


function LieSkinny3({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
          We will be using this information to set a healthy path for you to meet your health goals. It is common for you women to eat differently throughout the week than on a weekend. Therefore, we ask that one day of tracking is reflective of a weekend day of eating.
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <LArrowButton onPress={() => navigation.goBack()}/>
            <RArrowButton title="Submit" onPress={() => navigation.navigate('LieSkinny4')} />
          </View>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default LieSkinny3;
