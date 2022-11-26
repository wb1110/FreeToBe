import { Button, Input, useTheme } from '@rneui/themed';
import { Formik } from 'formik';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import StandardButton from '../../components/Buttons/StandardButton';
import useTrackerStore from '../../state/TrackerStore';

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

export default function EditFoodManually({ route, navigation }) {
  const { mealName, item, dayIndex } = route.params;
  const state = useTrackerStore();
  const { theme } = useTheme();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Formik
          initialValues={{
            foodName: item.foodName,
            calories: item.calories === undefined ? 0 : `${item.calories}`,
            fat: item.fat === undefined ? `${0}` : `${item.fat}`,
            carbs: item.carbs === undefined ? `${0}` : `${item.carbs}`,
            protein: item.protein === undefined ? `${0}` : `${item.protein}`,
            calcium: item.calcium === undefined ? `${0}` : `${item.calcium}`,
            choline: item.choline === undefined ? `${0}` : `${item.choline}`,
            copper: item.copper === undefined ? `${0}` : `${item.copper}`,
            iodine: item.iodine === undefined ? `${0}` : `${item.iodine}`,
            iron: item.iron === undefined ? `${0}` : `${item.iron}`,
            magnesium: item.magnesium === undefined ? `${0}` : `${item.magnesium}`,
            phosphorous: item.phosphorous === undefined ? `${0}` : `${item.phosphorous}`,
            potassium: item.potassium === undefined ? `${0}` : `${item.potassium}`,
            selenium: item.selenium === undefined ? `${0}` : `${item.selenium}`,
            sodium: item.sodium === undefined ? `${0}` : `${item.sodium}`,
            zinc: item.zinc === undefined ? `${0}` : `${item.zinc}`,
          }}
          onSubmit={(values) => {
            state.editFood(values, dayIndex, mealName, values.foodName);
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
                      label="Calories"
                      onChangeText={handleChange('calories')}
                      onBlur={handleBlur('calories')}
                      value={values.calories}
                      errorMessage={errors.calories}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Fat"
                      onChangeText={handleChange('fat')}
                      onBlur={handleBlur('fat')}
                      value={values.fat}
                      errorMessage={errors.fat}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Carbs"
                      onChangeText={handleChange('carbs')}
                      onBlur={handleBlur('carbs')}
                      value={values.carbs}
                      errorMessage={errors.carbs}
                      containerStyle={{ width: '50%' }}
                    />
                    <Input
                      label="Protein"
                      onChangeText={handleChange('protein')}
                      onBlur={handleBlur('protein')}
                      value={values.protein}
                      errorMessage={errors.protein}
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
                      onChangeText={handleChange('iodine')}
                      onBlur={handleBlur('iodine')}
                      value={values.iodine}
                      errorMessage={errors.iodine}
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
                  <Button
                    title="Delete"
                    color={theme.colors.white}
                    onPress={() => {
                      state.deleteFood(dayIndex, mealName, values.foodName);
                      navigation.navigate('TrackerHome');
                    }}
                    buttonStyle={{
                      borderWidth: 2,
                      borderRadius: 30,
                      color: theme.colors.white,
                      borderColor: theme.colors.white,
                    }}
                    containerStyle={{
                      width: 200,
                      marginHorizontal: 10,
                      marginVertical: 10,
                      borderColor: theme.colors.white,
                    }}
                    titleStyle={{
                      color: theme.colors.primary,
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
