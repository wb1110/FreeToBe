import { useFocusEffect } from '@react-navigation/core';
import { Button, Text } from '@rneui/themed';
import { useCallback } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AuthForm from '../components/AuthForm';
import Container from '../components/Container';
import useAuthStore from '../state/AuthStore';

function Login({ navigation }) {
  const { signin, errorMessage, setErrorMessage } = useAuthStore();

  useFocusEffect(
    useCallback(() => {
      setErrorMessage('');
    }, [])
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <Container>
            <AuthForm
              handleSubmit={signin}
              submitButtonText="Sign in"
              errorMessage={errorMessage}
            />
            <View
              style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}
            >
              <Text>New to Free To Be Nourished?</Text>
              <Button
                type="clear"
                onPress={() => {
                  navigation.navigate('Register');
                }}
                title="Register"
              />
            </View>
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Login;
