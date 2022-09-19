import { Input, Text } from "@rneui/themed";
import { Formik } from 'formik';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import LArrowButton from '../../components/Buttons/LArrowButton';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useStore from '../../state/Store';
import * as Yup from 'yup';

const BodyFatSchema = Yup.object().shape({
  bodyFat: Yup.number('Must be a number!')
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
          onSubmit={values => state.setBodyFat(values)}
          validationSchema={BodyFatSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <Container>
              <Input 
                label='Body Fat Percentage' 
                onChangeText={handleChange('bodyFat')}
                onBlur={handleBlur('bodyFat')}
                value={values.bodyFat}
              />
              {errors.bodyFat && touched.bodyFat ? (
             <Text>{errors.bodyFat}</Text>
           ) : null}
              <StandardButton title="Submit" onPress={() => {navigation.navigate('Pregnant'); handleSubmit()}}/>
                <LArrowButton onPress={() => navigation.goBack()}/>
            </Container>
          )}
        </Formik>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default BodyFatKnown;
