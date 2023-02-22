import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import useSettingsStore from '../../state/SettingsStore';

export default function WillSettings() {
  const { theme } = useTheme();
  const settingsState = useSettingsStore();
  const [hide, setHide] = useState(false);
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
  const removeMetabolicJournal = async () => {
    try {
      await AsyncStorage.removeItem('metabolicJournal');
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
  };
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };
  return (
    <>
      <Button title="Show Will's Settings" onPress={() => setHide(!hide)} />
      {hide ? (
        <View
          style={{
            backgroundColor: theme.colors.primary,
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity onPress={() => removeAssessment()}>
            <Text h4>Clear Assessment Data</Text>
            {/* <Button title="Clear Assessment Data" /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTracker()}>
            <Text h4>Clear Tracker Data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeThreeDayLog()}>
            <Text h4>Clear Three Day Log Data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeMetabolicJournal()}>
            <Text h4>Clear Metabolic Journal Data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeSettings()}>
            <Text h4>Clear Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getAllKeys()}>
            <Text h4>Check Data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => clearAll()}>
            <Text h4>Delete All Data</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}
