import { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

import SingleSelectCheck from '../../components/SingleSelectCheck';

export default function Suggestions({ TDEE }) {
  const [selected, setSelected] = useState(0);

  let protein;
  let carb;
  let fat;

  const macroOptions = (option) => {
    if (option === 1) {
      protein = Math.round(TDEE * 0.3);
      carb = Math.round(TDEE * 0.4);
      fat = Math.round(TDEE * 0.3);
    }
    if (option === 2) {
      protein = Math.round(TDEE * 0.2);
      carb = Math.round(TDEE * 0.55);
      fat = Math.round(TDEE * 0.25);
    }
    if (option === 3) {
      protein = Math.round(TDEE * 0.25);
      carb = Math.round(TDEE * 0.45);
      fat = Math.round(TDEE * 0.2);
    }
  };

  macroOptions(selected);

  return (
    <View>
      <Text h2>Suggestions</Text>
      {selected === 1 ? (
        <SingleSelectCheck
          title="Protein, Carb, Fat(30/40/30)"
          checked
          onPress={() => setSelected(1)}
        />
      ) : (
        <SingleSelectCheck
          title="Protein, Carb, Fat(30/40/30)"
          checked={false}
          onPress={() => setSelected(1)}
        />
      )}
      {selected === 2 ? (
        <SingleSelectCheck
          title="Protein, Carb, Fat(20/55/25)"
          checked
          onPress={() => setSelected(2)}
        />
      ) : (
        <SingleSelectCheck
          title="Protein, Carb, Fat(20/55/25)"
          checked={false}
          onPress={() => setSelected(2)}
        />
      )}
      {selected === 3 ? (
        <SingleSelectCheck
          title="Protein, Carb, Fat(25/45/20)"
          checked
          onPress={() => setSelected(3)}
        />
      ) : (
        <SingleSelectCheck
          title="Protein, Carb, Fat(25/45/20)"
          checked={false}
          onPress={() => setSelected(3)}
        />
      )}

      <Text>Protein: {protein}</Text>
      <Text>Carbohydrates: {carb}</Text>
      <Text>Fats: {fat}</Text>
    </View>
  );
}
