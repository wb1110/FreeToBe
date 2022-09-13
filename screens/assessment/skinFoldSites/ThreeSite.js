import { Input, Text } from "@rneui/themed";
import { useState } from "react";
import { Formik } from 'formik';
import Container from '../../../components/Container'
import StandardButton from "../../../components/Buttons/StandardButton";
import useStore from "../../../state/Store";
import TextContainer from "../../../components/TextContainer";

const ThreeSite = ({ navigation }) => {
  const state = useStore();
  const bodyFat = (sum, age) => {
    const result = ((0.41563 * sum) - (0.00112 * (Math.pow(sum, 2))) + (0.03661 * age) + 4.03653)
   return console.log(result);
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
      state.setBodyFat(values);
      bodyFat((+values.abdominal + +values.triceps + +values.suprailiac),state.assessment.age)
    }}
  >
{({ handleChange, handleBlur, handleSubmit, bodyFat, values }) => (
       <Container>
       <Input 
         label='Abdominal' 
         onChangeText={handleChange('abdominal')}
         onBlur={handleBlur('abdominal')}
         value={values.abdominal}
       />
       <Input 
         label='Triceps' 
         onChangeText={handleChange('triceps')}
         onBlur={handleBlur('triceps')}
         value={values.triceps}
       />
       <Input 
         label='Suprailiac' 
         onChangeText={handleChange('suprailiac')}
         onBlur={handleBlur('suprailiac')}
         value={values.suprailiac}
       />
       <TextContainer>Body Fat: {+values.abdominal + +values.triceps + +values.suprailiac}</TextContainer>
       <StandardButton title="Submit" onPress={() => {navigation.navigate('BodyFatKnown'); handleSubmit()}}/>
     </Container>
     )}
  </Formik>
  )
};

export default ThreeSite