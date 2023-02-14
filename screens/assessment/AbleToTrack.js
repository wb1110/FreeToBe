import { SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useStore from '../../state/Store';
import { storeData } from '../../functions/Posts';
import useAuthStore from '../../state/AuthStore';

function AbleToTrack({ navigation }) {
  const state = useStore();
  const { id } = useAuthStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            storeData(id, state.assessment);
            navigation.navigate('UserHome', { screen: 'Home' });
          }}
        />
        <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default AbleToTrack;
