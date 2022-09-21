import { Input, Text } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import * as Yup from 'yup';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useStore from '../../state/Store';

const BodyFatSchema = Yup.object().shape({
  bodyFat: Yup.number()
  .typeError('Must be a number!')
    .positive('Must be a positive number!')
    .integer('Must be a whole number!')
    .max(99, 'Too Long!')
    .required('Required'),
});


function BodyFatKnown({ navigation }) {
  const state = useStore();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar />
        <Formik
          initialValues={{ bodyFat: state.assessment.bodyFat }}
          onSubmit={values => {state.setBodyFat(values); navigation.navigate('Pregnant')}}
          validationSchema={BodyFatSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Container>
              <Input 
                label='Body Fat Percentage' 
                onChangeText={handleChange('bodyFat')}
                onBlur={handleBlur('bodyFat')}
                value={values.bodyFat}
                errorMessage={errors.bodyFat}
              />
              <StandardButton title="Submit" onPress={() => handleSubmit()}/>
                <LArrowButton onPress={() => navigation.goBack()}/>
            </Container>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default BodyFatKnown;
