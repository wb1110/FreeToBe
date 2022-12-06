import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
} from 'react-native';
import { Input, Text, Button } from '@rneui/themed';
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import useStore from '../state/Store';
import { getAssessment, getSettings } from '../functions/Gets';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import useSettingsStore from '../state/SettingsStore';

function LogoTitle() {
  return <Image source={ftbnBigLogo} />;
}

function Login({ navigation }) {
  const state = useStore();
  const settingsState = useSettingsStore();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar />
          <Container>
            <LogoTitle />
            <Input label="Email" />
            <Input secureTextEntry="true" label="Password" />
            <StandardButton
              onPress={() => {
                navigation.navigate('UserHome', { screen: 'Home' });
                getAssessment(state);
                getSettings(settingsState);
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
