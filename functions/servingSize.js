const servingSize = (foodPortions) => {
  const servingSizeArray = [
    {
      name: '100g',
      gramWeight: 100,
    },
  ];
  if (foodPortions) {
    foodPortions.map((i) => {
      if (i.measureUnit.name === 'undetermined') {
        servingSizeArray.push({ name: `${i.amount} ${i.modifier}`, gramWeight: i.gramWeight });
      } else if (!i.modifier) {
        servingSizeArray.push({
          name: `${i.amount} ${i.measureUnit.name}`,
          gramWeight: i.gramWeight,
        });
      } else {
        servingSizeArray.push({
          name: `${i.amount} ${i.measureUnit.name} ${i.modifier}`,
          gramWeight: i.gramWeight,
        });
      }
    });
  } else {
    servingSizeArray.push('100g');
  }
  return servingSizeArray;
};

export default servingSize;
