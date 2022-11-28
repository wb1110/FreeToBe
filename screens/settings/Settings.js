import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';

export default function Settings({ navigation }) {
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
    <View style={{ alignItems: 'center' }}>
      <StandardButton title="Clear Assessment Data" onPress={() => removeAssessment()} />
      <StandardButton title="Clear Tracker Data" onPress={() => removeTracker()} />
      <StandardButton title="Clear Three Day Log Data" onPress={() => removeThreeDayLog()} />
      <StandardButton title="Check Data" onPress={() => getAllKeys()} />
      <StandardButton
        title="Retake Assessment"
        onPress={() => navigation.navigate('HeightWeightAge')}
      />
    </View>
  );
}
