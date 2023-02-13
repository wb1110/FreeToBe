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
import { useState } from 'react';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import useAuthStore from '../state/AuthStore';

function LogoTitle() {
  return <Image source={ftbnBigLogo} />;
}

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuthStore();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <LogoTitle />
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Input
              secureTextEntry
              label="Password"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <StandardButton
              onPress={() => {
                // navigation.navigate('Welcome');
                signup({ email, password });
              }}
              title="Sign Up"
            />
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
