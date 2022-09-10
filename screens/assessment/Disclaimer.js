import { SafeAreaView , View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input , Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';
import RArrowButton from '../../components/Buttons/RArrowButton';


function Disclaimer({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Text>
          Disclaimer - If you don’t know where you are, you can’t know where you’re going. We know that tracking your food can have a negative effect on some women but to get started, we need 3 days of your eating habits to set your goals so you never have to track again. There are no restrictions or requirements for what you enter. What you eat is neither good nor bad, but it will help us know how to guide you to intuitive eating and food freedom.
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <LArrowButton onPress={() => navigation.goBack()}/>
            <RArrowButton title="Submit" onPress={() => navigation.navigate('Disclaimer')} />
          </View>
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default Disclaimer;
