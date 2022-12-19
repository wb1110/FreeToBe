import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { useEffect } from 'react';

function Item({ name, nutrient }) {
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
          {amount} {unit}
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

export default function NutritionFacts({ foodDetails, multiplier, setServingValues }) {
  const { foodNutrients } = foodDetails;
  const noNutrient = { amount: 0, unit: '' };

  const nutrientFilter = (array, idNumber) => {
    const values = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i].nutrient.id === idNumber) {
        Object.assign(values, {
          id: array[i].nutrient.id,
          name: array[i].nutrient.name,
          amount: array[i].amount * multiplier,
          unit: array[i].nutrient.unitName,
        });
        return values;
      }
    }
  };

  const protein = nutrientFilter(foodNutrients, 1003)
    ? nutrientFilter(foodNutrients, 1003)
    : noNutrient;
  const calories = nutrientFilter(foodNutrients, 1008)
    ? nutrientFilter(foodNutrients, 1008)
    : noNutrient;
  const carbs = nutrientFilter(foodNutrients, 1005)
    ? nutrientFilter(foodNutrients, 1005)
    : noNutrient;
  const fat = nutrientFilter(foodNutrients, 1004)
    ? nutrientFilter(foodNutrients, 1004)
    : noNutrient;
  const calcium = nutrientFilter(foodNutrients, 1087)
    ? nutrientFilter(foodNutrients, 1087)
    : noNutrient;
  const copper = nutrientFilter(foodNutrients, 1098)
    ? nutrientFilter(foodNutrients, 1098)
    : noNutrient;
  const choline = nutrientFilter(foodNutrients, 1180)
    ? nutrientFilter(foodNutrients, 1180)
    : noNutrient;
  const iodine = nutrientFilter(foodNutrients, 1100)
    ? nutrientFilter(foodNutrients, 1100)
    : noNutrient;
  const iron = nutrientFilter(foodNutrients, 1089)
    ? nutrientFilter(foodNutrients, 1089)
    : noNutrient;
  const magnesium = nutrientFilter(foodNutrients, 1090)
    ? nutrientFilter(foodNutrients, 1090)
    : noNutrient;
  const phosphorous = nutrientFilter(foodNutrients, 1091)
    ? nutrientFilter(foodNutrients, 1091)
    : noNutrient;
  const potassium = nutrientFilter(foodNutrients, 1092)
    ? nutrientFilter(foodNutrients, 1092)
    : noNutrient;
  const selenium = nutrientFilter(foodNutrients, 1103)
    ? nutrientFilter(foodNutrients, 1103)
    : noNutrient;
  const sodium = nutrientFilter(foodNutrients, 1093)
    ? nutrientFilter(foodNutrients, 1093)
    : noNutrient;
  const zinc = nutrientFilter(foodNutrients, 1095)
    ? nutrientFilter(foodNutrients, 1095)
    : noNutrient;

  console.log(choline);
  useEffect(() => {
    setServingValues({
      foodCalories: calories.amount,
      proteinGrams: protein.amount,
      carbGrams: carbs.amount,
      fatGrams: fat.amount,
      calcium: { value: calcium.amount, unit: calcium.unit },
      choline: { value: choline.amount, unit: choline.unit },
      copper: { value: copper.amount, unit: copper.unit },
      iodine: { value: iodine.amount, unit: iodine.unit },
      iron: { value: iron.amount, unit: iron.unit },
      magnesium: { value: magnesium.amount, unit: magnesium.unit },
      phosphorous: { value: phosphorous.amount, unit: phosphorous.unit },
      potassium: { value: potassium.amount, unit: potassium.unit },
      selenium: { value: selenium.amount, unit: selenium.unit },
      sodium: { value: sodium.amount, unit: sodium.unit },
      zinc: { value: zinc.amount, unit: zinc.unit },
    });
  }, []);

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <Item name="Calories" nutrient={calories} />
      <Item name="Protein" nutrient={protein} />
      <Item name="Fat" nutrient={fat} />
      <Item name="Carbs" nutrient={carbs} />
      <Item name="Calcium" nutrient={calcium} />
      <Item name="Copper" nutrient={copper} />
      <Item name="Choline" nutrient={choline} />
      <Item name="Iodine" nutrient={iodine} />
      <Item name="Iron" nutrient={iron} />
      <Item name="Magnesium" nutrient={magnesium} />
      <Item name="Phosphorous" nutrient={phosphorous} />
      <Item name="Potassium" nutrient={potassium} />
      <Item name="Selenium" nutrient={selenium} />
      <Item name="Sodium" nutrient={sodium} />
      <Item name="Zinc" nutrient={zinc} />
    </View>
  );
}
