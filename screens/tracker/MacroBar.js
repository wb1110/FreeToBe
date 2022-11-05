import { View } from 'react-native';
import useStore from '../../state/Store';
import MacroPie from './MacroPie';

export default function MacroBar({ protein, carbs, fats, calories }) {
  console.log(protein, 'protein');
  const state = useStore();
  const TDEE = state.assessment.tdee;

  const goalProtein = Math.round((TDEE * 0.3) / 4);
  const goalCarb = Math.round((TDEE * 0.4) / 4);
  const goalFat = Math.round((TDEE * 0.3) / 4);

  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        margin: '2%',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={protein} goal={goalProtein} label="Protein" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={fats} goal={goalFat} label="Fat" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={carbs} goal={goalCarb} label="Carbs" />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <MacroPie macro={calories} goal={TDEE} label="Calories" />
      </View>
    </View>
  );
}
