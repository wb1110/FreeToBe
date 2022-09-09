import { SafeAreaView, Text } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import CustomText from '../components/CustomText';


function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText variant='h1' >Welcome!</CustomText>
        <Text>Are you ready to have real sustainable change?</Text>
        <Text>Fill in the following to get started:</Text>
        <StandardButton onPress={() => navigation.navigate('HeightWeightAge')} title="Let's Do This" />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
