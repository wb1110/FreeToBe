import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from "@rneui/themed";
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';


function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Input label="Name" />
          <Input label="Email" />
          <StandardButton onPress={() => navigation.navigate('Welcome')} title="Sign Up" />
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
