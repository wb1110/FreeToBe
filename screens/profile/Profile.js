import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import Container from '../../components/Container';
import Calculations from './Calculations';

function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Text h1>AssessmentResults</Text>
        <Calculations />
      </Container>
    </SafeAreaView>
  );
}

export default Profile;
