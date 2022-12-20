import { Button, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import MyCustomerPicker from '../../components/MyCustomerPicker';
import ServingSizePicker from '../../components/ServingSizePicker';
import useTrackerStore from '../../state/TrackerStore';
import servingNumberFunction from './ServingArray';

function Item({ name, nutrient }) {
  if (nutrient) {
    const { value, unit } = nutrient;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          margin: '2%',
        }}
      >
        <Text>{name}</Text>
        <Text>
          {value} {unit}
        </Text>
      </View>
    );
  }
  // If there is no nutrient
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        margin: '2%',
      }}
    >
      <Text>{name}</Text>
      <Text>0</Text>
    </View>
  );
}

export default function EditFood({ route, navigation }) {
  const { mealName, item, dayIndex } = route.params;
  const [showNutritionFacts, setShowNutritionFacts] = useState(true);
  const [changeButton, setChangeButton] = useState(true);
  const state = useTrackerStore();
  const { editFood } = useTrackerStore();
  const { theme } = useTheme();

  const [servingSizeModal, setServingSizeModal] = useState(false);
  // Array containing the food details
  const [foodDetails, setFoodDetails] = useState(item);
  // Array of serving sizes
  const [servingSizes, setServingSizes] = useState();
  // Servings value from custompicker
  const [selectServingSize, setSelectServingSize] = useState({
    name: '100g',
    gramWeight: 100,
  });
  // Numer of servings value from customer picker
  const [selectNumberofServings, setSelectNumberofServings] = useState(1);
  const [servingNumberModal, setServingNumberModal] = useState(false);

  const servingNumberArray = servingNumberFunction(1, 200, 1);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback>
            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  margin: '2%',
                  padding: '2%',
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.white,
                }}
              >
                <Text h4>{foodDetails.foodName}</Text>
              </View>
              <View style={{ width: '100%' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '95%',
                    margin: '2%',
                  }}
                >
                  <Button
                    title="Update Food"
                    onPress={() => {
                      editFood(foodDetails, dayIndex, mealName, foodDetails.foodName);
                      navigation.navigate('TrackerHome');
                    }}
                    buttonStyle={{
                      color: theme.colors.white,
                    }}
                    containerStyle={{
                      width: '45%',
                      borderColor: theme.colors.white,
                    }}
                  />
                  <Button
                    title="Delete Food"
                    color={theme.colors.white}
                    onPress={() => {
                      state.deleteFood(dayIndex, mealName, foodDetails.foodName);
                      navigation.navigate('TrackerHome');
                    }}
                    buttonStyle={{
                      color: theme.colors.white,
                    }}
                    containerStyle={{
                      width: '45%',
                      borderColor: theme.colors.white,
                    }}
                    titleStyle={{
                      color: theme.colors.primary,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '2%',
                  }}
                >
                  <Text>Serving Size</Text>
                  <Button
                    title={selectServingSize.name || 'Select'}
                    onPress={() => setServingSizeModal(!servingSizeModal)}
                  />
                  <ServingSizePicker
                    setModalOpen={setServingSizeModal}
                    modalOpen={servingSizeModal}
                    value={selectServingSize}
                    items={servingSizes}
                    setValue={setSelectServingSize}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '2%',
                  }}
                >
                  <Text>Number of Servings</Text>
                  <Button
                    title={`${selectNumberofServings}`}
                    onPress={() => setServingNumberModal(!servingNumberModal)}
                  />
                  <MyCustomerPicker
                    setModalOpen={setServingNumberModal}
                    modalOpen={servingNumberModal}
                    value={selectNumberofServings}
                    items={servingNumberArray}
                    setValue={setSelectNumberofServings}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '2%',
                  }}
                >
                  <Text>Nutrition Facts</Text>
                  <Button
                    title={changeButton ? 'Hide' : 'Show facts'}
                    onPress={() => {
                      setShowNutritionFacts(!showNutritionFacts);
                      setChangeButton(!changeButton);
                    }}
                  />
                </View>
              </View>
              {showNutritionFacts && foodDetails ? (
                <View style={{ alignItems: 'center', width: '100%' }}>
                  <Item
                    name="Calories"
                    nutrient={{ value: foodDetails.foodCalories, unit: 'kcal' }}
                  />
                  <Item name="Protein" nutrient={{ value: foodDetails.proteinGrams, unit: 'g' }} />
                  <Item name="Fat" nutrient={{ value: foodDetails.fatGrams, unit: 'g' }} />
                  <Item name="Carbs" nutrient={{ value: foodDetails.carbGrams, unit: 'g' }} />
                  <Item name="Calcium" nutrient={foodDetails.calcium} />
                  <Item name="Copper" nutrient={foodDetails.copper} />
                  <Item name="Choline" nutrient={foodDetails.choline} />
                  <Item name="Iodine" nutrient={foodDetails.iodine} />
                  <Item name="Iron" nutrient={foodDetails.iron} />
                  <Item name="Magnesium" nutrient={foodDetails.magnesium} />
                  <Item name="Phosphorous" nutrient={foodDetails.phosphorous} />
                  <Item name="Potassium" nutrient={foodDetails.potassium} />
                  <Item name="Selenium" nutrient={foodDetails.selenium} />
                  <Item name="Sodium" nutrient={foodDetails.sodium} />
                  <Item name="Zinc" nutrient={foodDetails.zinc} />
                </View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
