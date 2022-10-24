import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { Input, Text, Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import useStore from '../state/Store';

function Login({ navigation }) {
  const state = useStore();
  const getAssessment = async () => {
    let userAssessment;
    try {
      const assessment = await AsyncStorage.getItem('assessment');
      userAssessment = JSON.parse(assessment);
      state.setAssessment(userAssessment);
    } catch (e) {
      return e;
    }
    return userAssessment;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar />
          <Container>
            <Input label="Email" />
            <Input secureTextEntry="true" label="Password" />
            <StandardButton
              onPress={() => {
                navigation.navigate('UserHome', { screen: 'Profile' });
                getAssessment();
              }}
              title="Sign In"
            />
            <View
              style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}
            >
              <Text>New to Free To Be Nourished?</Text>
              <Button
                type="clear"
                onPress={() => {
                  navigation.navigate('Register');
                }}
                title="Register"
              />
            </View>
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Login;
