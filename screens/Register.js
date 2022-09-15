import { SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Input, Text, Button } from "@rneui/themed";
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';


function Register({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Container>
          <Input label="Email" />
          <Input label="Password" />
          <Input label="Full name" />
          <StandardButton onPress={() => navigation.navigate('Welcome')} title="Sign Up" />
          <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}>
          <Text>Already a member of Free To Be Nourished?</Text>
          <Button type='clear' onPress={() => navigation.navigate('Login')} title="Login" />
          </View>
          
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
