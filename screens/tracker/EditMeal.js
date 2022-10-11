import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useTrackerStore from '../../state/TrackerStore';

function EditMeal({ navigation, route }) {
  const { mealName, mealTime, dayIndex } = route.params;
  const state = useTrackerStore();
  const { editMeal } = state;

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
          initialValues={{ mealName, mealTime }}
          onSubmit={(values) => {
            editMeal(values, dayIndex, mealName);
            // state.addMeal(values);
            // addNewMeal(values);
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

export default EditMeal;
