/* eslint-disable no-use-before-define */
import { useFocusEffect } from '@react-navigation/core';
import { Button, Text } from '@rneui/themed';
import { useCallback, useEffect } from 'react';
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

function Register({ navigation }) {
  const { signup, errorMessage, setErrorMessage, tryLocalSignin } = useAuthStore();

  useEffect(() => {
    tryLocalSignin();
  }, []);

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
              handleSubmit={signup}
              submitButtonText="Sign Up"
              errorMessage={errorMessage}
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
