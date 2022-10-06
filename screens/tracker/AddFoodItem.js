import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Input, SearchBar, Text } from '@rneui/themed';
import { Formik } from 'formik';
import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import StandardButton from '../../components/Buttons/StandardButton';

const foodSchema = Yup.object().shape({
  foodName: Yup.string().required('Required'),
});

export default function AddFoodItem() {
  const [formValues, setFormValues] = useState({
    foodName: 'Burrito',
    calories: '',
    fatGrams: '',
    carbsGrams: '',
    proteinGrams: '',
  });
  const [search, setSearch] = useState('');

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Formik
          initialValues={{ formValues }}
          onSubmit={(values) => {
            setFormValues(values);
          }}
          validationSchema={foodSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ alignItems: 'center' }}>
              <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                inputContainerStyle={{ backgroundColor: 'white' }}
                containerStyle={{
                  borderBottomColor: 'transparent',
                  borderTopColor: 'transparent',
                  width: '100%',
                }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: '2%',
                    alignItems: 'center',
                    margin: '2%',
                    width: '40%',
                  }}
                >
                  <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
                  <Text style={{ color: 'black' }}>Scan Barcode</Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: '2%',
                    alignItems: 'center',
                    margin: '2%',
                    width: '40%',
                  }}
                >
                  <MaterialIcons name="post-add" size={24} color="black" />
                  <Text style={{ color: 'black' }}>Manual Add</Text>
                </View>
              </View>

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
              <StandardButton title="Submit" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}
