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

export default function EditNutritionFacts({
  foodDetails,
  name,
  multiplier,
  selectServingSize,
  servingSizes,
  setServingValues,
  display,
}) {
  const amountModifier = (amount, gramWeight, servings) =>
    (amount * (gramWeight / 100) * servings).toFixed(2);
  const noNutrient = { amount: 0, unit: '' };

  const calories = amountModifier(foodDetails.calories, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.calories, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const protein = amountModifier(foodDetails.protein, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.protein, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const carbs = amountModifier(foodDetails.carbs, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.carbs, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const fat = amountModifier(foodDetails.fat, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.fat, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const calcium = amountModifier(
    foodDetails.calcium.value,
    selectServingSize.gramWeight,
    multiplier
  )
    ? amountModifier(foodDetails.calcium.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const copper = amountModifier(foodDetails.copper.value, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.copper.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const choline = amountModifier(
    foodDetails.choline.value,
    selectServingSize.gramWeight,
    multiplier
  )
    ? amountModifier(foodDetails.choline.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const iodine = amountModifier(foodDetails.iodine.value, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.iodine.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const iron = amountModifier(foodDetails.iron.value, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.iron.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const magnesium = amountModifier(
    foodDetails.magnesium.value,
    selectServingSize.gramWeight,
    multiplier
  )
    ? amountModifier(foodDetails.magnesium.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const phosphorous = amountModifier(
    foodDetails.phosphorous.value,
    selectServingSize.gramWeight,
    multiplier
  )
    ? amountModifier(foodDetails.phosphorous.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const potassium = amountModifier(
    foodDetails.potassium.value,
    selectServingSize.gramWeight,
    multiplier
  )
    ? amountModifier(foodDetails.potassium.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const selenium = amountModifier(
    foodDetails.selenium.value,
    selectServingSize.gramWeight,
    multiplier
  )
    ? amountModifier(foodDetails.selenium.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const sodium = amountModifier(foodDetails.sodium.value, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.sodium.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;
  const zinc = amountModifier(foodDetails.zinc.value, selectServingSize.gramWeight, multiplier)
    ? amountModifier(foodDetails.zinc.value, selectServingSize.gramWeight, multiplier)
    : noNutrient;

  useEffect(() => {
    setServingValues({
      foodName: name,
      servingSize: selectServingSize,
      servingSizeOptions: servingSizes,
      servingNumber: multiplier,
      calories,
      protein,
      carbs,
      fat,
      calcium: { value: calcium, unit: foodDetails.calcium.unit },
      choline: { value: choline, unit: foodDetails.choline.unit },
      copper: { value: copper, unit: foodDetails.copper.unit },
      iodine: { value: iodine, unit: foodDetails.iodine.unit },
      iron: { value: iron, unit: foodDetails.iron.unit },
      magnesium: { value: magnesium, unit: foodDetails.magnesium.unit },
      phosphorous: { value: phosphorous, unit: foodDetails.phosphorous.unit },
      potassium: { value: potassium, unit: foodDetails.potassium.unit },
      selenium: { value: selenium, unit: foodDetails.selenium.unit },
      sodium: { value: sodium, unit: foodDetails.sodium.unit },
      zinc: { value: zinc, unit: foodDetails.zinc.unit },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectServingSize, multiplier, name]);

  return (
    <View style={{ alignItems: 'center', width: '100%', display }}>
      <Item name="Calories" nutrient={{ amount: calories, unit: 'cal' }} />
      <Item name="Protein" nutrient={{ amount: protein, unit: 'g' }} />
      <Item name="Fat" nutrient={{ amount: fat, unit: 'g' }} />
      <Item name="Carbs" nutrient={{ amount: carbs, unit: 'g' }} />
      <Item name="Calcium" nutrient={{ amount: calcium, unit: foodDetails.calcium.unit }} />
      <Item name="Copper" nutrient={{ amount: copper, unit: foodDetails.copper.unit }} />
      <Item name="Choline" nutrient={{ amount: choline, unit: foodDetails.choline.unit }} />
      <Item name="Iodine" nutrient={{ amount: iodine, unit: foodDetails.iodine.unit }} />
      <Item name="Iron" nutrient={{ amount: iron, unit: foodDetails.iron.unit }} />
      <Item name="Magnesium" nutrient={{ amount: magnesium, unit: foodDetails.magnesium.unit }} />
      <Item
        name="Phosphorous"
        nutrient={{ amount: phosphorous, unit: foodDetails.phosphorous.unit }}
      />
      <Item name="Potassium" nutrient={{ amount: potassium, unit: foodDetails.potassium.unit }} />
      <Item name="Selenium" nutrient={{ amount: selenium, unit: foodDetails.selenium.unit }} />
      <Item name="Sodium" nutrient={{ amount: sodium, unit: foodDetails.sodium.unit }} />
      <Item name="Zinc" nutrient={{ amount: zinc, unit: foodDetails.zinc.unit }} />
    </View>
  );
}
