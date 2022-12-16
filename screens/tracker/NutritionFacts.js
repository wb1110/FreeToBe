import { View, Text } from 'react-native';
import React from 'react';

export default function NutritionFacts({ foodDetails }) {
  const { foodNutrients } = foodDetails;
  const nutrientIdsArray = [
    { id: 1003, name: 'protein' },
    { id: 1005, name: 'carbs' },
    { id: 1004, name: 'fat' },
    { id: 1008, name: 'calories' },
    { id: 1087, name: 'calcium' },
    { id: 1098, name: 'copper' },
    { id: 1180, name: 'choline' },
    { id: 1100, name: 'iodine' },
    { id: 1090, name: 'magnesium' },
    { id: 1091, name: 'phosphorous' },
    { id: 1092, name: 'potassium' },
    { id: 1103, name: 'selenium' },
    { id: 1093, name: 'sodium' },
    { id: 1095, name: 'zinc' },
  ];

  const nutrientFilter = (array, idNumber) => {
    const values = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i].nutrient.id === idNumber) {
        Object.assign(values, { amount: array[i].amount, unit: array[i].nutrient.unitName });
        return values;
      }
    }
  };

  const protein = nutrientFilter(foodNutrients, 1003);

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          margin: '2%',
        }}
      >
        <Text>Calories</Text>
        <Text>.amount nutrient.unitName</Text>
      </View>
      <View>
        <Text>Total Fat</Text>
        <Text>Total Fat</Text>
      </View>
      <View>
        <Text>Calories</Text>
        <Text>Calories</Text>
      </View>
      <View>
        <Text>Protein</Text>
        <Text>
          {protein.amount}
          {protein.unit}
        </Text>
      </View>
    </View>
  );
}
