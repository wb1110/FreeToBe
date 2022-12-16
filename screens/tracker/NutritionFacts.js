import { View, Text } from 'react-native';
import React from 'react';

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

export default function NutritionFacts({ foodDetails }) {
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
      <Item name="Calories" nutrient={calories} multiplier={1} />
      <Item name="Protein" nutrient={protein} multiplier={1} />
      <Item name="Fat" nutrient={fat} multiplier={1} />
      <Item name="Carbs" nutrient={carbs} multiplier={1} />
      <Item name="Calcium" nutrient={calcium} multiplier={1} />
      <Item name="Copper" nutrient={copper} multiplier={1} />
      <Item name="Choline" nutrient={choline} multiplier={1} />
      <Item name="Iodine" nutrient={iodine} multiplier={1} />
      <Item name="Magnesium" nutrient={magnesium} multiplier={1} />
      <Item name="Phosphorous" nutrient={phosphorous} multiplier={1} />
      <Item name="Potassium" nutrient={potassium} multiplier={1} />
      <Item name="Selenium" nutrient={selenium} multiplier={1} />
      <Item name="Sodium" nutrient={sodium} multiplier={1} />
      <Item name="Zinc" nutrient={zinc} multiplier={1} />
    </View>
  );
}
