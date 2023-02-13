/* eslint-disable no-use-before-define */
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Input, Text, Button } from '@rneui/themed';
import { useState } from 'react';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import useAuthStore from '../state/AuthStore';
import AuthForm from '../components/AuthForm';

function Register({ navigation }) {
  const { signup, errorMessage } = useAuthStore();

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

const styles = StyleSheet.create({
  errorMessage: {
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 15,
  },
});
