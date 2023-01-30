import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
} from 'react-native';
import { Input, Text, Button } from '@rneui/themed';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';

function LogoTitle() {
  return <Image source={ftbnBigLogo} />;
}

function Register({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <LogoTitle />
            <Input label="Email" />
            <Input secureTextEntry label="Password" />
            <Input label="Full name" />
            <StandardButton onPress={() => navigation.navigate('Welcome')} title="Sign Up" />
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'center',
              }}
            >
              <Text>Already a member of Free To Be Nourished?</Text>
              <Button type="clear" onPress={() => navigation.navigate('Login')} title="Login" />
            </View>
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Register;
