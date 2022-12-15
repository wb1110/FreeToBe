const servingSize = (foodPortions) => {
  const servingSizeArray = [];
  foodPortions?.map((i) => {
    if (i.measureUnit.name === 'undetermined') {
      servingSizeArray.push(`${i.amount} ${i.modifier}`);
    } else if (!i.modifier) {
      servingSizeArray.push(`${i.amount} ${i.measureUnit.name}`);
    } else {
      servingSizeArray.push(`${i.amount} ${i.measureUnit.name} ${i.modifier}`);
    }
    return servingSizeArray;
  });
};

export default servingSize;
