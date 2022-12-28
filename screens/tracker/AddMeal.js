import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import useTrackerStore from '../../state/TrackerStore';
import TimePicker from './TimePicker';

function AddMeal({ navigation, route }) {
  const { savedDate } = route.params;
  const state = useTrackerStore();
  const [time, setTime] = useState('');
  const addNewMeal = state.addMeal;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Formik
            initialValues={{ mealName: '', mealTime: time, mealID: uuidv4() }}
            onSubmit={(values) => {
              // eslint-disable-next-line no-param-reassign
              values.foodItems = [];
              // eslint-disable-next-line no-param-reassign
              // values.mealTime = time;
              addNewMeal(values, savedDate.date);
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
    </KeyboardAvoidingView>
  );
}

export default AddMeal;
