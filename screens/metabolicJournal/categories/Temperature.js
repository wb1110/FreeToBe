/* eslint-disable global-require */
import { Button, Input, Text } from '@rneui/themed';
import { View } from 'react-native';
import MealTemperatures from './MealTemperatures';

export default function Temperature({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Temperature</Text>
        <View style={{ flex: 1 }}>
          <Input
            label="Enter waking temperature here"
            onChangeText={(value) =>
              setMetabolicData({
                ...metabolicData,
                temperature: {
                  wakingTemp: value,
                },
              })
            }
          />
          <View style={{ margin: '2%' }}>
            {metabolicData.temperature && metabolicData.temperature.meals
              ? metabolicData.temperature.meals.map((item) => (
                  <View
                    key={item.mealName}
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Text>Meal Name: {item.mealName}</Text>
                    <Text>Pre-Meal: {item.preMealTemp}</Text>
                    <Text>Post-Meal: {item.postMealTemp}</Text>
                  </View>
                ))
              : null}
            <Text>Click below to add temperatures before and after a meal</Text>
            <MealTemperatures metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
          </View>
        </View>
      </View>
    </View>
  );
}
