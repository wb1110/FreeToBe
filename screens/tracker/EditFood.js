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
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const state = useTrackerStore();
  const { editFood } = useTrackerStore();
  const { theme } = useTheme();

  const [servingSizeModal, setServingSizeModal] = useState(false);
  // Array containing the food details
  const [foodDetails, setFoodDetails] = useState();
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
                <Text h4>{foodDetails?.description}</Text>
              </View>
              <View style={{ width: '100%' }}>
                <Button
                  title="Update Food"
                  onPress={() => {
                    editFood(values, dayIndex, mealName, values.foodName);
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
                <View style={{ alignItems: 'center', width: '100%', display: showNutritionFacts }}>
                  <Item name="Calories" nutrient={item.foodCalories} />
                  <Item name="Protein" nutrient={item.proteinGrams} />
                  <Item name="Fat" nutrient={item.fatGrams} />
                  <Item name="Carbs" nutrient={item.carbGrams} />
                  <Item name="Calcium" nutrient={item.calcium} />
                  <Item name="Copper" nutrient={item.copper} />
                  <Item name="Choline" nutrient={item.choline} />
                  <Item name="Iodine" nutrient={item.iodine} />
                  <Item name="Iron" nutrient={item.iron} />
                  <Item name="Magnesium" nutrient={item.magnesium} />
                  <Item name="Phosphorous" nutrient={item.phosphorous} />
                  <Item name="Potassium" nutrient={item.potassium} />
                  <Item name="Selenium" nutrient={item.selenium} />
                  <Item name="Sodium" nutrient={item.sodium} />
                  <Item name="Zinc" nutrient={item.zinc} />
                </View>
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
