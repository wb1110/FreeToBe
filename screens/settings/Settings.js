import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';

export default function Settings({ navigation }) {
  const { theme } = useTheme();
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
    <View style={{ justifyContent: 'center', flex: 1, backgroundColor: theme.colors.primary }}>
      <View style={{ width: '100%' }}>
        <Button title="Clear Assessment Data" onPress={() => removeAssessment()} />
      </View>
      <View style={{ width: '100%' }}>
        <Button title="Clear Tracker Data" onPress={() => removeTracker()} />
      </View>
      <View style={{ width: '100%' }}>
        <Button title="Clear Three Day Log Data" onPress={() => removeThreeDayLog()} />
      </View>
      <View style={{ width: '100%' }}>
        <Button title="Check Data" onPress={() => getAllKeys()} />
      </View>
      <View style={{ width: '100%' }}>
        <Button title="Retake Assessment" onPress={() => navigation.navigate('HeightWeightAge')} />
      </View>
    </View>
  );
}
