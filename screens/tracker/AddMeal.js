import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useTrackerStore from '../../state/TrackerStore';

function AddMeal({ navigation, mealList }) {
  const state = useTrackerStore();
  const [formValues, setFormValues] = useState({
    mealName: '',
    mealTime: '',
  });

  // eslint-disable-next-line consistent-return
  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('tracker', jsonValue);
  //   } catch (e) {
  //     // saving error
  //     return e;
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Formik
          initialValues={{ formValues }}
          onSubmit={(values) => {
            mealList.push({ mealName: values.mealName, mealTime: values.mealTime });
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Input
                label="Meal Name"
                onChangeText={handleChange('mealName')}
                onBlur={handleBlur('mealName')}
                value={values.mealName}
                errorMessage={errors.mealName}
                containerStyle={{ width: '100%' }}
              />
              <Input
                label="Meal Time"
                onChangeText={handleChange('mealTime')}
                onBlur={handleBlur('mealTime')}
                value={values.mealTime}
                errorMessage={errors.mealTime}
              />
              <StandardButton
                title="Submit"
                onPress={() => {
                  handleSubmit();
                  navigation.navigate('TrackerHome');
                }}
              />
            </View>
          )}
        </Formik>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default AddMeal;
