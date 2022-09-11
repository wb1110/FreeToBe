import { Text } from "@rneui/themed";
import { SafeAreaView } from 'react-native';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import FocusedStatusBar from '../components/FocusedStatusBar';
import TextContainer from "../components/TextContainer";


function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Text h1>Welcome!</Text>
        <TextContainer>
          <Text h2>Are you ready to have real sustainable change?</Text>
        </TextContainer>
        <Text h2>Fill in the following to get started:</Text>
        <StandardButton onPress={() => navigation.navigate('HeightWeightAge')} title="Let's Do This" />
      </Container>
    </SafeAreaView>
  );
};

export default Welcome;
