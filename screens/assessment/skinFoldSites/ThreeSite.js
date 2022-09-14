import { Input, Text } from "@rneui/themed";
import { useState } from "react";
import { Formik } from 'formik';
import Container from '../../../components/Container'
import StandardButton from "../../../components/Buttons/StandardButton";
import useStore from "../../../state/Store";
import TextContainer from "../../../components/TextContainer";

function ThreeSite({ navigation }) {
  const state = useStore();
  const bodyFat = (sum, age) => {
    const result = ((0.41563 * sum) - (0.00112 * (sum**2)) + (0.03661 * age) + 4.03653)
   return result;
  };
  
  return (
  <Formik
    initialValues={{
      abdominal: state.assessment.abdominal, 
      triceps: state.assessment.triceps, 
      suprailiac: state.assessment.suprailiac,
      bodyFat: state.assessment.bodyFat,
    }}
    onSubmit={values => {
      values.bodyFat = bodyFat((+values.abdominal + +values.triceps + +values.suprailiac),state.assessment.age)
      state.setBodyFat(values);
    }}
  >
{({ handleChange, handleBlur, handleSubmit, values }) => (
       <Container>
       <Input 
        inputContainerStyle={{ borderColor:'white' }}
         label='Abdominal' 
         onChangeText={handleChange('abdominal')}
         onBlur={handleBlur('abdominal')}
         value={values.abdominal}
       />
       <Input 
        inputContainerStyle={{ borderColor:'white' }}
        label='Triceps' 
         onChangeText={handleChange('triceps')}
         onBlur={handleBlur('triceps')}
         value={values.triceps}
       />
       <Input 
         inputContainerStyle={{ borderColor:'white' }}
         label='Suprailiac' 
         onChangeText={handleChange('suprailiac')}
         onBlur={handleBlur('suprailiac')}
         value={values.suprailiac}
       />
       <StandardButton title="Submit" onPress={() => {navigation.navigate('Pregnant'); handleSubmit()}}/>
     </Container>
     )}
  </Formik>
  )
}

export default ThreeSite