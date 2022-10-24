import { SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useStore from '../../state/Store';

function AbleToTrack({ navigation }) {
  const state = useStore();

  // eslint-disable-next-line consistent-return
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('assessment', jsonValue);
    } catch (e) {
      // saving error
      return e;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Text h4>After this disclaimer, I am…</Text>
        <StandardButton
          title="Able to track 3 days"
          onPress={() => {
            navigation.navigate('LieSkinny');
          }}
        />
        <StandardButton
          title="Unable to track 3 days"
          onPress={() => {
            storeData(state.assessment);
            navigation.navigate('UserHome', { screen: 'Profile' });
          }}
        />
        <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default AbleToTrack;
