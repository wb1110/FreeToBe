import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import useSettingsStore from '../../state/SettingsStore';
import SettingsContainer from './SettingsContainer';

export default function Settings({ navigation }) {
  const { theme } = useTheme();
  const settingsState = useSettingsStore();
  const removeAssessment = async () => {
    try {
      await AsyncStorage.removeItem('assessment');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e, 'error');
      // remove error
    }
    // eslint-disable-next-line no-console
    console.log('Done.');
  };
  const removeTracker = async () => {
    try {
      await AsyncStorage.removeItem('tracker');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e, 'error');
      // remove error
    }
    // eslint-disable-next-line no-console
    console.log('Done.');
  };
  const removeThreeDayLog = async () => {
    try {
      await AsyncStorage.removeItem('threeDayLog');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e, 'error');
      // remove error
    }
    // eslint-disable-next-line no-console
    console.log('Done.');
  };
  const removeSettings = async () => {
    try {
      await AsyncStorage.removeItem('settings');
      settingsState.clearSettings();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e, 'error');
      // remove error
    }
    // eslint-disable-next-line no-console
    console.log('Done.');
  };
  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e, 'error');
      // read key error
    }
    // eslint-disable-next-line no-console
    console.log(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'flex-end',
      }}
    >
      <SettingsContainer onPress={() => removeAssessment()}>
        <Text h4>Clear Assessment Data</Text>
        {/* <Button title="Clear Assessment Data" /> */}
      </SettingsContainer>
      <SettingsContainer onPress={() => removeTracker()}>
        <Text h4>Clear Tracker Data</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => removeThreeDayLog()}>
        <Text h4>Clear Three Day Log Data</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => removeSettings()}>
        <Text h4>Clear Settings</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => getAllKeys()}>
        <Text h4>Check Data</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('HeightWeightAge')}>
        <Text h4>Retake Assessment</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('MacroDistribution')}>
        <Text h4>Select Macronutrient Distribution</Text>
      </SettingsContainer>
    </View>
  );
}
