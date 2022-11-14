import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import StandardButton from '../components/Buttons/StandardButton';
import LArrowButton from '../components/Buttons/LArrowButton';
import Container from '../components/Container';
import FocusedStatusBar from '../components/FocusedStatusBar';
import TextContainer from '../components/TextContainer';

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Text h1>Welcome!</Text>
        <TextContainer>Are you ready to have real sustainable change?</TextContainer>
        <Text h3 />
        <StandardButton
          onPress={() => navigation.navigate('HeightWeightAge')}
          title="Let's Do This"
        />
        <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default Welcome;
