import { Button, Input } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import StandardButton from '../../components/Buttons/StandardButton';
import useTrackerStore from '../../state/TrackerStore';

const foodSchema = Yup.object().shape({
  foodName: Yup.string().required('Required'),
});

export default function EditManually({ route, navigation }) {
  const { mealName, item, dayIndex } = route.params;
  const { foodName, calories, fatGrams, carbsGrams, proteinGrams } = item;
  const state = useTrackerStore();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Formik
          initialValues={{
            foodName,
            calories,
            fatGrams,
            carbsGrams,
            proteinGrams,
          }}
          onSubmit={(values) => {
            state.editFood(values, dayIndex, mealName, foodName);
          }}
          validationSchema={foodSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ alignItems: 'center' }}>
              <Input
                label="Food Name"
                onChangeText={handleChange('foodName')}
                onBlur={handleBlur('foodName')}
                value={values.foodName}
                errorMessage={errors.foodName}
                containerStyle={{ width: '100%' }}
              />
              <Input
                label="Calories"
                onChangeText={handleChange('calories')}
                onBlur={handleBlur('calories')}
                value={values.calories}
                errorMessage={errors.calories}
              />
              <Input
                label="Fat"
                onChangeText={handleChange('fatGrams')}
                onBlur={handleBlur('fatGrams')}
                value={values.fatGrams}
                errorMessage={errors.fatGrams}
              />
              <Input
                label="Carbs"
                onChangeText={handleChange('carbsGrams')}
                onBlur={handleBlur('carbsGrams')}
                value={values.carbsGrams}
                errorMessage={errors.carbsGrams}
              />
              <Input
                label="Protein"
                onChangeText={handleChange('proteinGrams')}
                onBlur={handleBlur('proteinGrams')}
                value={values.proteinGrams}
                errorMessage={errors.proteinGrams}
              />
              <StandardButton
                title="Submit"
                onPress={() => {
                  handleSubmit();
                  navigation.navigate('TrackerHome');
                }}
              />
              <Button
                title="Delete"
                color="red"
                onPress={() => {
                  state.deleteFood(dayIndex, mealName, foodName);
                  navigation.navigate('TrackerHome');
                }}
                buttonStyle={{
                  borderWidth: 2,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
