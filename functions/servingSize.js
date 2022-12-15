const servingSize = (foodPortions) => {
  const servingSizeArray = [];
  if (foodPortions) {
    foodPortions.map((i) => {
      if (i.measureUnit.name === 'undetermined') {
        servingSizeArray.push(`${i.amount} ${i.modifier}`);
      } else if (!i.modifier) {
        servingSizeArray.push(`${i.amount} ${i.measureUnit.name}`);
      } else {
        servingSizeArray.push(`${i.amount} ${i.measureUnit.name} ${i.modifier}`);
      }
    });
  } else {
    servingSizeArray.push('100g');
  }
  return servingSizeArray;
};

export default servingSize;
