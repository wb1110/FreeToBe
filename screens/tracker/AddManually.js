import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import StandardButton from '../../components/Buttons/StandardButton';
import useTrackerStore from '../../state/TrackerStore';

const foodSchema = Yup.object().shape({
  foodName: Yup.string().required('Required'),
});

export default function AddManually({ mealName, dayIndex, navigation }) {
  const state = useTrackerStore();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Formik
          initialValues={{
            foodID: uuidv4(),
            foodName: '',
            calories: '',
            fatGrams: '',
            carbGrams: '',
            proteinGrams: '',
            calcium: '',
            choline: '',
            copper: '',
            iodine: '',
            iron: '',
            magnesium: '',
            phosphorous: '',
            potassium: '',
            selenium: '',
            sodium: '',
            zinc: '',
          }}
          onSubmit={(values) => {
            state.addFood(values, dayIndex, mealName);
          }}
          validationSchema={foodSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    label="Calories"
                    onChangeText={handleChange('calories')}
                    onBlur={handleBlur('calories')}
                    value={values.calories}
                    errorMessage={errors.calories}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Fat"
                    onChangeText={handleChange('fatGrams')}
                    onBlur={handleBlur('fatGrams')}
                    value={values.fatGrams}
                    errorMessage={errors.fatGrams}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Carbs"
                    onChangeText={handleChange('carbGrams')}
                    onBlur={handleBlur('carbGrams')}
                    value={values.carbGrams}
                    errorMessage={errors.carbGrams}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Protein"
                    onChangeText={handleChange('proteinGrams')}
                    onBlur={handleBlur('proteinGrams')}
                    value={values.proteinGrams}
                    errorMessage={errors.proteinGrams}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Calcium"
                    onChangeText={handleChange('calcium')}
                    onBlur={handleBlur('calcium')}
                    value={values.calcium}
                    errorMessage={errors.calcium}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Choline"
                    onChangeText={handleChange('choline')}
                    onBlur={handleBlur('choline')}
                    value={values.choline}
                    errorMessage={errors.choline}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Copper"
                    onChangeText={handleChange('copper')}
                    onBlur={handleBlur('copper')}
                    value={values.copper}
                    errorMessage={errors.copper}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Iodine"
                    onChangeText={handleChange('idone')}
                    onBlur={handleBlur('idone')}
                    value={values.idone}
                    errorMessage={errors.idone}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Iron"
                    onChangeText={handleChange('iron')}
                    onBlur={handleBlur('iron')}
                    value={values.iron}
                    errorMessage={errors.iron}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Magnesium"
                    onChangeText={handleChange('magnesium')}
                    onBlur={handleBlur('magnesium')}
                    value={values.magnesium}
                    errorMessage={errors.magnesium}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Phosphorous"
                    onChangeText={handleChange('phosphorous')}
                    onBlur={handleBlur('phosphorous')}
                    value={values.phosphorous}
                    errorMessage={errors.phosphorous}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Potassium"
                    onChangeText={handleChange('potassium')}
                    onBlur={handleBlur('potassium')}
                    value={values.potassium}
                    errorMessage={errors.potassium}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Selenium"
                    onChangeText={handleChange('selenium')}
                    onBlur={handleBlur('selenium')}
                    value={values.selenium}
                    errorMessage={errors.selenium}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Sodium"
                    onChangeText={handleChange('sodium')}
                    onBlur={handleBlur('sodium')}
                    value={values.sodium}
                    errorMessage={errors.sodium}
                    containerStyle={{ width: '50%' }}
                  />
                  <Input
                    label="Zinc"
                    onChangeText={handleChange('zinc')}
                    onBlur={handleBlur('zinc')}
                    value={values.zinc}
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
            </ScrollView>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
