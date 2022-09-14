import { Input } from "@rneui/themed";
import { Formik } from 'formik';
import StandardButton from "../../../components/Buttons/StandardButton";
import Container from '../../../components/Container';
import useStore from "../../../state/Store";

function FourSite({ navigation }) {
  const state = useStore();
  const bodyFat = (sum, age) => {
    const result = ((0.29669 * sum) - (0.00043 * (sum**2)) + (0.02963 * age) + 1.4072)
   return result;
  };
  
  return (
  <Formik
    initialValues={{
      abdominal: state.assessment.abdominal, 
      triceps: state.assessment.triceps, 
      suprailiac: state.assessment.suprailiac,
      thigh: state.assessment.thigh,
      bodyFat: state.assessment.bodyFat,
    }}
    onSubmit={values => {
      const recurranceValue = {...values};
      recurranceValue.bodyFat = bodyFat((+values.abdominal + +values.triceps + +values.suprailiac + +values.thigh),state.assessment.age)
      state.setBodyFat(recurranceValue);
    }}
  >
{({ handleChange, handleBlur, handleSubmit, values }) => (
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
       <Input
         label='Thigh' 
         onChangeText={handleChange('thigh')}
         onBlur={handleBlur('thigh')}
         value={values.thigh}
       />
       <StandardButton title="Submit" onPress={() => {navigation.navigate('Pregnant'); handleSubmit()}}/>
     </Container>
     )}
  </Formik>
  )
}

export default FourSite