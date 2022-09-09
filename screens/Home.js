import { SafeAreaView } from 'react-native';
import { Text } from "@rneui/themed";
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';


function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Text h1>Welcome!</Text>
        <Text h2>Are you ready to have real sustainable change?</Text>
        <Text h2>Fill in the following to get started:</Text>
        <StandardButton onPress={() => navigation.navigate('HeightWeightAge')} title="Let's Do This" />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
