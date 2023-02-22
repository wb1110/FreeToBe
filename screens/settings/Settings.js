import { Text, useTheme } from '@rneui/themed';
import { useEffect } from 'react';
import { View } from 'react-native';
import useAuthStore from '../../state/AuthStore';
import useMetabolicStore from '../../state/MetabolicStore';
import useSettingsStore from '../../state/SettingsStore';
import useStore from '../../state/Store';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import useTrackerStore from '../../state/TrackerStore';
import useCalculations from '../assessment/Calculations';
import SettingsContainer from './SettingsContainer';
import WillSettings from './WillSettings';

export default function Settings({ navigation }) {
  const { theme } = useTheme();
  const { signout, id } = useAuthStore();
  const trackerState = useTrackerStore();
  const authState = useAuthStore();
  const settingsState = useSettingsStore();
  const threeDayLogState = useThreeDayLogStore();
  const metabolicState = useMetabolicStore();
  const assessmentState = useStore();
  const { setNewTDEE, assessment } = assessmentState;
  const { bodyFat, weight, height, age, dueDate, exerciseActivity, workActivity, babies, nursing } =
    assessment;
  const tdee = useCalculations();

  useEffect(() => {
    setNewTDEE(id, tdee);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyFat, weight, height, age, dueDate, exerciseActivity, workActivity, babies, nursing, id]);

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
