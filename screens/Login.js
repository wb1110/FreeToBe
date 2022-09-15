import { SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Input, Text, Button } from "@rneui/themed";
import FocusedStatusBar from '../components/FocusedStatusBar';
import StandardButton from '../components/Buttons/StandardButton';
import Container from '../components/Container';


function Login({ navigation }) {
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
          <StandardButton onPress={() => navigation.navigate('UserHome')} title="Sign In" />
          <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center' }}>
          <Text>New to Free To Be Nourished?</Text>
          <Button type='clear' onPress={() => navigation.navigate('Register')} title="Register" />
          </View>
          
        </Container>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
