import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { Input , Text } from "@rneui/themed";
import React, { useState } from 'react'
import RoundButton from "./Buttons/RoundButton";
import RoundButtonSelected from './Buttons/RoundButtonSelected';
import StandardButton from "./Buttons/StandardButton";
import Container from "./Container";
import { Formik } from 'formik';
import * as Yup from 'yup';
import useStore from '../state/Store';

const DueDateSchema = Yup.object().shape({
  dueDate: Yup.date()
    .typeError('Must be a valid date')
    .required('Required'),
});

function IsPregnant({ navigation }) {
  const [babies, setBabies] = useState(0);
  const state = useStore();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <Container>
        <Formik
          initialValues={{ dueDate: state.assessment.dueDate }}
          onSubmit={values => {state.setBodyFat(values); navigation.navigate('Nursing')}}
          validationSchema={DueDateSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Container>
            <Text h4>
              How many babies are you carrying?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              {babies === 1 ? <RoundButtonSelected title="1" onPress={() => setBabies(1)}/> : <RoundButton title="1" onPress={() => setBabies(1)}/>}
              {babies === 2 ? <RoundButtonSelected title="2" onPress={() => setBabies(2)}/> : <RoundButton title="2" onPress={() => setBabies(2)}/>}
              {babies === 3 ? <RoundButtonSelected title="3" onPress={() => setBabies(3)}/> : <RoundButton title="3" onPress={() => setBabies(3)}/>}
              {babies === 4 ? <RoundButtonSelected title="4" onPress={() => setBabies(4)}/> : <RoundButton title="4" onPress={() => setBabies(4)}/>}
              {babies === 5 ? <RoundButtonSelected title="5" onPress={() => setBabies(5)}/> : <RoundButton title="5" onPress={() => setBabies(5)}/>}
              {babies === 6 ? <RoundButtonSelected title="6" onPress={() => setBabies(6)}/> : <RoundButton title="6" onPress={() => setBabies(6)}/>}
            </View>
              <Input
                label='What is your due date?' 
                onChangeText={handleChange('dueDate')}
                onBlur={handleBlur('dueDate')}
                value={values.dueDate}
                errorMessage={errors.dueDate && touched.dueDate ? errors.dueDate : null}
              />
              <StandardButton title="Submit" onPress={() => handleSubmit()}/>
            </Container>
          )}
        </Formik>
      </Container>
      </Container>
    </KeyboardAvoidingView>
  )
}

export default IsPregnant