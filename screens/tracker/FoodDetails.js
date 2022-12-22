import { Button, Text, useTheme } from '@rneui/themed';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MyCustomerPicker from '../../components/MyCustomerPicker';
import ServingSizePicker from '../../components/ServingSizePicker';
import servingSize from '../../functions/servingSize';
import useTrackerStore from '../../state/TrackerStore';
import NutritionFacts from './NutritionFacts';
import servingNumberFunction from './ServingArray';

export default function FoodDetails({ route, navigation }) {
  const { addFood } = useTrackerStore();
  const { fdcId, dayIndex, mealName } = route.params;
  const [showNutritionFacts, setShowNutritionFacts] = useState(true);
  const [changeButton, setChangeButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  // Array containing the food details
  const [foodDetails, setFoodDetails] = useState();
  const [servingSizeModal, setServingSizeModal] = useState(false);
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

  const [servingValues, setServingValues] = useState({
    fdcId,
    foodName: '',
    servingSize: selectServingSize,
    servingNumber: selectNumberofServings,
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    calcium: { value: 0, unit: '' },
    choline: { value: 0, unit: '' },
    copper: { value: 0, unit: '' },
    iodine: { value: 0, unit: '' },
    iron: { value: 0, unit: '' },
    magnesium: { value: 0, unit: '' },
    phosphorous: { value: 0, unit: '' },
    potassium: { value: 0, unit: '' },
    selenium: { value: 0, unit: '' },
    sodium: { value: 0, unit: '' },
    zinc: { value: 0, unit: '' },
  });

  const servingNumberArray = servingNumberFunction(1, 200, 1);

  useEffect(() => {
    setLoading(true);
    const getByFDCID = (id) => {
      axios
        .get(
          `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=QGFVnH9V6cq73KFQNwa5ckdhM1dIbifXkZx7rFzZ`
        )
        .then(async (res) => {
          const result = await res.data;
          setServingSizes(servingSize(result.foodPortions));
          setFoodDetails(result);
          setLoading(false);
          return result;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setLoading(false);
        });
    };
    getByFDCID(fdcId);
  }, [fdcId]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback>
            {loading ? (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator
                  size="large"
                  color={theme.colors.white}
                  visible={loading}
                  textContent="Searching USDA Database..."
                />
              </View>
            ) : (
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
                    title="Log Food"
                    onPress={() => {
                      addFood(servingValues, dayIndex, mealName);
                      navigation.navigate('TrackerHome');
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
                  <NutritionFacts
                    foodDetails={foodDetails}
                    name={foodDetails?.description}
                    multiplier={selectNumberofServings}
                    selectServingSize={selectServingSize}
                    servingValues={servingValues}
                    setServingValues={setServingValues}
                    display={showNutritionFacts ? 'flex' : 'none'}
                  />
                ) : null}
              </View>
            )}
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
