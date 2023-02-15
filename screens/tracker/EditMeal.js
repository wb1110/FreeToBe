import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useAuthStore from '../../state/AuthStore';
import useTrackerStore from '../../state/TrackerStore';

function EditMeal({ navigation, route }) {
  const { mealName, dayIndex } = route.params;
  const state = useTrackerStore();
  const { editMeal } = state;
  const { id } = useAuthStore();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Formik
          initialValues={{ mealName }}
          onSubmit={(values) => {
            // eslint-disable-next-line no-param-reassign
            // values.mealTime = time;
            editMeal(id, values, dayIndex, mealName);
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
              {/* <TimePicker mealTime={time} setTime={setTime} /> */}
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
