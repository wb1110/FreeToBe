import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';

export default function Settings({ navigation }) {
  const removeValue = async (item) => {
    try {
      await AsyncStorage.removeItem(item);
    } catch (e) {
      console.log(e, 'error');
      // remove error
    }

    console.log('Done.');
  };
  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e, 'error');
      // read key error
    }

    console.log(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };
  return (
    <View style={{ alignItems: 'center' }}>
      <StandardButton title="Clear Assessment Data" onPress={() => removeValue('assessment')} />
      <StandardButton title="Clear Tracker Data" onPress={() => removeValue('tracker')} />
      <StandardButton title="Check Data" onPress={() => getAllKeys()} />
      <StandardButton
        title="Retake Assessment"
        onPress={() => navigation.navigate('HeightWeightAge')}
      />
    </View>
  );
}
