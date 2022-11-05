import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useTrackerStore from '../../state/TrackerStore';

function AddMeal({ navigation, route }) {
  const { dateToAddTo } = route.params;
  const state = useTrackerStore();
  const addNewMeal = state.addMeal;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Formik
          initialValues={{ mealName: '', mealTime: '' }}
          onSubmit={(values) => {
            // eslint-disable-next-line no-param-reassign
            values.foodItems = [];
            addNewMeal(values, dateToAddTo);
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
