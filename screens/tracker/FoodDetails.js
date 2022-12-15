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
import servingSize from '../../functions/servingSize';

export default function FoodDetails({ route }) {
  const { fdcId } = route.params;
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const [foodDetails, setFoodDetails] = useState();
  const [servingSizes, setServingSizes] = useState();

  const [servingSizeModal, setServingSizeModal] = useState(false);

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
              <ActivityIndicator
                size="large"
                color={theme.colors.white}
                visible={loading}
                textContent="Searching USDA Database..."
              />
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
                      title="Modal Open"
                      onPress={() => setServingSizeModal(!servingSizeModal)}
                    />
                    <MyCustomerPicker
                      setModalOpen={setServingSizeModal}
                      modalOpen={servingSizeModal}
                      value={servingSizes}
                      items={servingSizes}
                      setValue={setServingSizes}
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
                    <Button title="Modal Open" />
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
                {showNutritionFacts ? (
                  <View>
                    <Text>Test</Text>
                  </View>
                ) : null}
              </View>
            )}
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
