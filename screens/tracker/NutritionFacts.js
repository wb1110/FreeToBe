import { View } from 'react-native';
import { Text } from '@rneui/themed';
import React, { useState } from 'react';

function Item({ name, nutrient, multiplier }) {
  if (nutrient) {
    const { amount, unit } = nutrient;
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
          {amount * multiplier} {unit}
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

export default function NutritionFacts({ foodDetails, multiplier }) {
  const { foodNutrients } = foodDetails;

  const nutrientFilter = (array, idNumber) => {
    const values = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i].nutrient.id === idNumber) {
        Object.assign(values, {
          id: array[i].nutrient.id,
          name: array[i].nutrient.name,
          amount: array[i].amount,
          unit: array[i].nutrient.unitName,
        });
        return values;
      }
    }
  };

  const protein = nutrientFilter(foodNutrients, 1003);
  const calories = nutrientFilter(foodNutrients, 1008);
  const carbs = nutrientFilter(foodNutrients, 1005);
  const fat = nutrientFilter(foodNutrients, 1004);
  const calcium = nutrientFilter(foodNutrients, 1087);
  const copper = nutrientFilter(foodNutrients, 1098);
  const choline = nutrientFilter(foodNutrients, 1180);
  const iodine = nutrientFilter(foodNutrients, 1100);
  const magnesium = nutrientFilter(foodNutrients, 1090);
  const phosphorous = nutrientFilter(foodNutrients, 1091);
  const potassium = nutrientFilter(foodNutrients, 1092);
  const selenium = nutrientFilter(foodNutrients, 1103);
  const sodium = nutrientFilter(foodNutrients, 1093);
  const zinc = nutrientFilter(foodNutrients, 1095);

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <Item name="Calories" nutrient={calories} multiplier={multiplier} />
      <Item name="Protein" nutrient={protein} multiplier={multiplier} />
      <Item name="Fat" nutrient={fat} multiplier={multiplier} />
      <Item name="Carbs" nutrient={carbs} multiplier={multiplier} />
      <Item name="Calcium" nutrient={calcium} multiplier={multiplier} />
      <Item name="Copper" nutrient={copper} multiplier={multiplier} />
      <Item name="Choline" nutrient={choline} multiplier={multiplier} />
      <Item name="Iodine" nutrient={iodine} multiplier={multiplier} />
      <Item name="Magnesium" nutrient={magnesium} multiplier={multiplier} />
      <Item name="Phosphorous" nutrient={phosphorous} multiplier={multiplier} />
      <Item name="Potassium" nutrient={potassium} multiplier={multiplier} />
      <Item name="Selenium" nutrient={selenium} multiplier={multiplier} />
      <Item name="Sodium" nutrient={sodium} multiplier={multiplier} />
      <Item name="Zinc" nutrient={zinc} multiplier={multiplier} />
    </View>
  );
}
