import { SafeAreaView } from 'react-native';
import { Text } from "@rneui/themed";
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';


function AbleToTrack({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Text>
        After this disclaimer I am…
        </Text>
          <StandardButton title="Able to track 3 days" onPress={() => {navigation.navigate('LieSkinny')}} />
          <StandardButton title="Unable to track 3 days" onPress={() => alert('Need Route')} />
          <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default AbleToTrack;
