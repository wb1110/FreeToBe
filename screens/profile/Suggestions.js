import { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { VictoryBar, VictoryPie, VictoryTheme } from 'victory-native';
import SingleSelectCheck from '../../components/SingleSelectCheck';

export default function Suggestions({ TDEE }) {
  const [selected, setSelected] = useState(0);

  let protein;
  let carb;
  let fat;

  const macroOptions = (option) => {
    if (option === 1) {
      protein = Math.round((TDEE * 0.3) / 4);
      carb = Math.round((TDEE * 0.4) / 4);
      fat = Math.round((TDEE * 0.3) / 4);
    }
    if (option === 2) {
      protein = Math.round((TDEE * 0.2) / 4);
      carb = Math.round((TDEE * 0.55) / 4);
      fat = Math.round((TDEE * 0.25) / 4);
    }
    if (option === 3) {
      protein = Math.round((TDEE * 0.25) / 4);
      carb = Math.round((TDEE * 0.45) / 4);
      fat = Math.round((TDEE * 0.2) / 4);
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
      <VictoryPie
        width={350}
        theme={VictoryTheme.material}
        data={[
          { x: 'Protein', y: protein },
          { x: 'Carbohydrates', y: carb },
          { x: 'Fats', y: fat },
        ]}
      />
      <Text>Protein: {protein}g</Text>
      <Text>Carbohydrates: {carb}g</Text>
      <Text>Fats: {fat}g</Text>
    </View>
  );
}
