import { SafeAreaView, Text } from 'react-native';
import { FocusedStatusBar } from '../components';
import Container from '../components/Container';
import CustomText from '../components/CustomText';
import { Button } from '@rneui/themed';
import StandardButton from '../components/Buttons/StandardButton';


function Home({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText variant='h1' >Welcome!</CustomText>
        <Text>Are you ready to have real sustainable change?</Text>
        <Text>Fill in the following to get started:</Text>
        <StandardButton onPress={() => navigation.navigate('Gender')} title="Let's Do This" />
      </Container>
    </SafeAreaView>
  );
}

export default Home;
