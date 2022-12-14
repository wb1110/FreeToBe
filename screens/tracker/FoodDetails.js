import { Button, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import MyCustomerPicker from '../../components/MyCustomerPicker';
import { useGetByFDCID } from '../../functions/Gets';

export default function FoodDetails({ route }) {
  const { fdcId } = route.params;
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const foodDetails = useGetByFDCID(fdcId);
  const { theme } = useTheme();

  const [servingSizeModal, setServingSizeModal] = useState(false);
  const [servingSize, setServingSize] = useState(0);

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
                <Text h4>Food Name</Text>
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
                    value={servingSize}
                    items={foodDetails}
                    setValue={setServingSize}
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
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
