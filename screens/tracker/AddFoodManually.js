import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import StandardButton from '../../components/Buttons/StandardButton';
import useTrackerStore from '../../state/TrackerStore';
import useAuthStore from '../../state/AuthStore';

const foodSchema = Yup.object().shape({
  foodName: Yup.string().required('Required'),
  calories: Yup.number().typeError('A number is required'),
  fat: Yup.number().typeError('A number is required'),
  carbs: Yup.number().typeError('A number is required'),
  protein: Yup.number().typeError('A number is required'),
  calcium: Yup.number().typeError('A number is required'),
  choline: Yup.number().typeError('A number is required'),
  copper: Yup.number().typeError('A number is required'),
  iodine: Yup.number().typeError('A number is required'),
  iron: Yup.number().typeError('A number is required'),
  magnesium: Yup.number().typeError('A number is required'),
  phosphorous: Yup.number().typeError('A number is required'),
  potassium: Yup.number().typeError('A number is required'),
  selenium: Yup.number().typeError('A number is required'),
  sodium: Yup.number().typeError('A number is required'),
  zinc: Yup.number().typeError('A number is required'),
});

export default function AddFoodManually({ route, navigation }) {
  const { mealName, dayIndex } = route.params;
  const state = useTrackerStore();
  const { id } = useAuthStore();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Formik
          initialValues={{
            foodId: uuidv4(),
            foodName: '',
            calories: { value: 0, unit: 'kCal' },
            protein: { value: 0, unit: 'g' },
            carbs: { value: 0, unit: 'g' },
            fat: { value: 0, unit: 'g' },
            calcium: { value: 0, unit: 'mg' },
            choline: { value: 0, unit: 'mg' },
            copper: { value: 0, unit: 'µg' },
            iodine: { value: 0, unit: 'µg' },
            iron: { value: 0, unit: 'mg' },
            magnesium: { value: 0, unit: 'mg' },
            phosphorous: { value: 0, unit: 'mg' },
            potassium: { value: 0, unit: 'mg' },
            selenium: { value: 0, unit: 'µg' },
            sodium: { value: 0, unit: 'mg' },
            zinc: { value: 0, unit: 'mg' },
          }}
          onSubmit={(values) => {
            const foodData = {
              foodId: uuidv4(),
              foodName: values.foodName,
              calories: { value: values.calories, unit: 'kCal' },
              protein: { value: values.protein, unit: 'g' },
              carbs: { value: values.carbs, unit: 'g' },
              fat: { value: values.fat, unit: 'g' },
              calcium: { value: values.calcium, unit: 'mg' },
              choline: { value: values.choline, unit: 'mg' },
              copper: { value: values.copper, unit: 'µg' },
              iodine: { value: values.iodine, unit: 'µg' },
              iron: { value: values.iron, unit: 'mg' },
              magnesium: { value: values.magnesium, unit: 'mg' },
              phosphorous: { value: values.phosphorous, unit: 'mg' },
              potassium: { value: values.potassium, unit: 'mg' },
              selenium: { value: values.selenium, unit: 'µg' },
              sodium: { value: values.sodium, unit: 'mg' },
              zinc: { value: values.zinc, unit: 'mg' },
            };
            state.addFood(id, foodData, dayIndex, mealName);
          }}
          validationSchema={foodSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center' }}>
                  <Input
                    label="Food Name"
                    onChangeText={handleChange('foodName')}
                    onBlur={handleBlur('foodName')}
                    value={values.foodName}
                    errorMessage={errors.foodName}
                    containerStyle={{ width: '100%' }}
                  />
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Input
                      label="Calories (kCal)"
                      onChangeText={handleChange('calories')}
                      onBlur={handleBlur('calories')}
                      value={values.calories.value}
                      errorMessage={errors.calories}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Fat (g)"
                      onChangeText={handleChange('fat')}
                      onBlur={handleBlur('fat')}
                      value={values.fat.value}
                      errorMessage={errors.fat}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Carbs (g)"
                      onChangeText={handleChange('carbs')}
                      onBlur={handleBlur('carbs')}
                      value={values.carbs.value}
                      errorMessage={errors.carbs}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Protein (g)"
                      onChangeText={handleChange('protein')}
                      onBlur={handleBlur('protein')}
                      value={values.protein.value}
                      errorMessage={errors.protein}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Calcium (mg)"
                      onChangeText={handleChange('calcium')}
                      onBlur={handleBlur('calcium')}
                      value={values.calcium.value}
                      errorMessage={errors.calcium}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Choline (mg)"
                      onChangeText={handleChange('choline')}
                      onBlur={handleBlur('choline')}
                      value={values.choline.value}
                      errorMessage={errors.choline}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Copper (µg)"
                      onChangeText={handleChange('copper')}
                      onBlur={handleBlur('copper')}
                      value={values.copper.value}
                      errorMessage={errors.copper}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Iodine (µg)"
                      onChangeText={handleChange('iodine')}
                      onBlur={handleBlur('iodine')}
                      value={values.iodine.value}
                      errorMessage={errors.iodine}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Iron (mg)"
                      onChangeText={handleChange('iron')}
                      onBlur={handleBlur('iron')}
                      value={values.iron.value}
                      errorMessage={errors.iron}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Magnesium (mg)"
                      onChangeText={handleChange('magnesium')}
                      onBlur={handleBlur('magnesium')}
                      value={values.magnesium.value}
                      errorMessage={errors.magnesium}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Phosphorous (mg)"
                      onChangeText={handleChange('phosphorous')}
                      onBlur={handleBlur('phosphorous')}
                      value={values.phosphorous.value}
                      errorMessage={errors.phosphorous}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Potassium (mg)"
                      onChangeText={handleChange('potassium')}
                      onBlur={handleBlur('potassium')}
                      value={values.potassium.value}
                      errorMessage={errors.potassium}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Selenium (µg)"
                      onChangeText={handleChange('selenium')}
                      onBlur={handleBlur('selenium')}
                      value={values.selenium.value}
                      errorMessage={errors.selenium}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Sodium (mg)"
                      onChangeText={handleChange('sodium')}
                      onBlur={handleBlur('sodium')}
                      value={values.sodium.value}
                      errorMessage={errors.sodium}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Zinc (mg)"
                      onChangeText={handleChange('zinc')}
                      onBlur={handleBlur('zinc')}
                      value={values.zinc.value}
                      errorMessage={errors.zinc}
                      containerStyle={{ width: '50%' }}
                    />
                  </View>

                  <StandardButton
                    title="Submit"
                    onPress={() => {
                      handleSubmit();
                      navigation.navigate('TrackerHome');
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
