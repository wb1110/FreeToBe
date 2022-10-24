import { Input } from '@rneui/themed';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import CustomCheckBox from '../../components/CustomCheckBox';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import TextContainer from '../../components/TextContainer';

function Goals({ navigation }) {
  const [metabolism, setMetabolism] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [loseWeight, setLoseWeight] = useState(false);
  const [increaseCalories, setIncreaseCalories] = useState(false);
  const [muscleMass, setMuscleMass] = useState(false);
  const [freedom, setFreedom] = useState(false);
  const [written, setWritten] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar />
          <Container>
            <TextContainer>
              Which of these goals would you like to get out of this experience?
              {'\n'}
              {'\n'}
              Check all that apply:
            </TextContainer>
            <View style={{ alignItems: 'flex-start' }}>
              <CustomCheckBox
                title="Increase metabolism"
                state={metabolism}
                setState={setMetabolism}
              />
              <CustomCheckBox
                title="Have steady energy throughout the day"
                state={energy}
                setState={setEnergy}
              />
              <CustomCheckBox title="Lose weight" state={loseWeight} setState={setLoseWeight} />
              <CustomCheckBox
                title="Increase the calories I eat without gaining weight"
                state={increaseCalories}
                setState={setIncreaseCalories}
              />
              <CustomCheckBox
                title="Increase muscle mass"
                state={muscleMass}
                setState={setMuscleMass}
              />
              <CustomCheckBox
                title="Food Freedom (Learn about the makeup of food and be able to intuitively eat)"
                state={freedom}
                setState={setFreedom}
              />
            </View>
            <Input
              label="Write in your own goal"
              onChangeText={(value) => setWritten(value)}
              style={{ margin: 'auto', width: '80%' }}
            />
            {metabolism ||
            energy ||
            loseWeight ||
            increaseCalories ||
            muscleMass ||
            freedom ||
            written ? (
              <StandardButton title="Submit" onPress={() => navigation.navigate('DietHistory')} />
            ) : (
              <StandardButton title="Submit" disabled />
            )}
            <LArrowButton onPress={() => navigation.goBack()} />
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Goals;
