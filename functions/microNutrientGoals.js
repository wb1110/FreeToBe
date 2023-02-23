function microNutrientGoals(vitamin, unit, isPregnant = false, isBreastfeeding = false) {
  // object of vitamin/micronutrient amounts and their changes for pregnancy and breastfeeding
  const nutrientObj = {
    calcium: { mg: 1000, pregnantChange: 0, breastfeedingChange: 0 },
    copper: { µg: 900, pregnantChange: 400, breastfeedingChange: 400 },
    choline: { mg: 425, µg: null, pregnantChange: 55, breastfeedingChange: 125 },
    iodine: { µg: 150, pregnantChange: 70, breastfeedingChange: 140 },
    iron: { mg: 18, pregnantChange: 27, breastfeedingChange: 9 },
    magnesium: { mg: 315, pregnantChange: 355, breastfeedingChange: 0 },
    phosphorous: { mg: 700, pregnantChange: 0, breastfeedingChange: 0 },
    potassium: { mg: 2600, pregnantChange: 300, breastfeedingChange: 200 },
    selenium: { mg: null, µg: 55, pregnantChange: 5, breastfeedingChange: 15 },
    sodium: { mg: 1500, µg: null, pregnantChange: 0, breastfeedingChange: 0 },
    zinc: { mg: 8, µg: null, pregnantChange: 3, breastfeedingChange: 4 },
  };

  // convert unit to lowercase for consistency
  const lowerUnit = unit.toLowerCase();

  // calculate the amount based on the vitamin/micronutrient and unit provided
  let amount;
  if (lowerUnit === 'mg') {
    amount = nutrientObj[vitamin].mg;
  } else if (lowerUnit === 'µg') {
    amount = nutrientObj[vitamin].µg;
  } else {
    throw new Error('Invalid unit provided');
  }

  // adjust the amount if the user is pregnant or breastfeeding
  if (isPregnant) {
    amount += nutrientObj[vitamin].pregnantChange;
  }
  if (isBreastfeeding) {
    amount += nutrientObj[vitamin].breastfeedingChange;
  }

  return amount;
}

export default microNutrientGoals;
