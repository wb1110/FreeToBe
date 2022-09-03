import { SafeAreaView, Text } from 'react-native';
import { FocusedStatusBar } from '../components';
import Button from '../components/Button';
import Container from '../components/Container';
import CustomText from '../components/CustomText';


function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>Welcome!</CustomText>
        <Text>Are you ready to have real sustainable change?</Text>
        <Text>Fill in the following to get started:</Text>
        <Button onPress={() => navigation.navigate('Gender')} title="Let's Do This" />
      </Container>
    </SafeAreaView>
  );
}

export default Home;
