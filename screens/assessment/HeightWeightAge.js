import { Input } from "@rneui/themed";
import { Formik } from 'formik';
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Modal, Platform, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import useStore from '../../state/Store';
import {Picker} from '@react-native-picker/picker';
import NarrowButton from "../../components/Buttons/NarrowButton";



function HeightWeightAge({ navigation }) {
  const state = useStore();

  const [heightModal, setHeightModal] = useState(false);
  const [weightModal, setWeightModal] = useState(false);
  const [ageModal, setAgeModal] = useState(false);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar />
          <Formik
            initialValues={{ height: state.assessment.height, weight: state.assessment.weight, age: state.assessment.age }}
            onSubmit={values => state.setHWA(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Container>
              <Input label='Height' value={values.height} onChangeText={handleChange('height')} onBlur={handleBlur('height')}/>
              <Input label='Weight' value={values.weight} onChangeText={handleChange('weight')} onBlur={handleBlur('weight')}/>
              <Input label='Age' value={values.age} onChangeText={handleChange('age')} onBlur={handleBlur('age')}/>
              <StandardButton title="Submit" onPress={() => {handleSubmit(); navigation.navigate('BodyFatPercentage') }}/>
              <LArrowButton onPress={() => navigation.goBack()}/>
            </Container>
            )}
          </Formik>
          <StandardButton title="Height" onPress={() => setHeightModal(!heightModal)}/>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default HeightWeightAge;
