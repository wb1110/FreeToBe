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
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import useStore from '../state/Store';
import {
  getAssessment,
  getMetabolicJournal,
  getSettings,
  getThreeDayLog,
  getTracker,
} from '../functions/Gets';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import useSettingsStore from '../state/SettingsStore';
import useTrackerStore from '../state/TrackerStore';
import useThreeDayLogStore from '../state/ThreeDayLogStore';
import useMetabolicStore from '../state/MetabolicStore';

function LogoTitle() {
  return <Image source={ftbnBigLogo} />;
}

function Login({ navigation }) {
  const state = useStore();
  const trackerState = useTrackerStore();
  const threeDayLogState = useThreeDayLogStore();
  const settingsState = useSettingsStore();
  const metabolicState = useMetabolicStore();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <LogoTitle />
            <Input label="Email" />
            <Input secureTextEntry label="Password" />
            <StandardButton
              onPress={() => {
                navigation.navigate('UserHome', { screen: 'Home' });
                getAssessment(state);
                getSettings(settingsState);
                getTracker(trackerState);
                getThreeDayLog(threeDayLogState);
                getMetabolicJournal(metabolicState);
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
