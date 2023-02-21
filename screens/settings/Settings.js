import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import useAuthStore from '../../state/AuthStore';
import useMetabolicStore from '../../state/MetabolicStore';
import useSettingsStore from '../../state/SettingsStore';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import useTrackerStore from '../../state/TrackerStore';
import SettingsContainer from './SettingsContainer';
import WillSettings from './WillSettings';

export default function Settings({ navigation }) {
  const { theme } = useTheme();
  const { signout } = useAuthStore();
  const trackerState = useTrackerStore();
  const authState = useAuthStore();
  const settingsState = useSettingsStore();
  const threeDayLogState = useThreeDayLogStore();
  const metabolicState = useMetabolicStore();
  const assessmentState = useStore();

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'flex-end',
      }}
    >
      <SettingsContainer onPress={() => navigation.navigate('Account')}>
        <Text h4>Account</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('Profile')}>
        <Text h4>Profile</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('Targets')}>
        <Text h4>Targets</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('Feedback')}>
        <Text h4>Send feedback & help us improve</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('HeightWeightAge')}>
        <Text h4>Retake Assessment</Text>
      </SettingsContainer>
      <SettingsContainer
        onPress={() => {
          signout();
          trackerState.resetState();
          authState.resetState();
          settingsState.resetState();
          threeDayLogState.resetState();
          metabolicState.resetState();
          assessmentState.resetState();
        }}
      >
        <Text h4>Log Out</Text>
      </SettingsContainer>
      <WillSettings />
    </View>
  );
}
