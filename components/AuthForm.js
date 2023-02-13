/* eslint-disable no-use-before-define */
import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import ftbnBigLogo from '../assets/icons/ftbnBigLogo.png';
import StandardButton from './Buttons/StandardButton';

function LogoTitle() {
  return <Image source={ftbnBigLogo} />;
}

function Register({ handleSubmit, errorMessage, submitButtonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
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
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <StandardButton onPress={() => handleSubmit({ email, password })} title={submitButtonText} />
    </>
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
