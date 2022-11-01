import { Text } from '@rneui/themed';
import { View } from 'react-native';
import useStore from '../../state/Store';
import MacroPie from './MacroPie';

export default function MacroBar({ protein, carbs, fats, calories }) {
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
        <Text>Protein</Text>
        <MacroPie macro={protein} goal={goalProtein} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>Fat</Text>
        <MacroPie macro={fats} goal={goalFat} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>Carbs</Text>
        <MacroPie macro={carbs} goal={goalCarb} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>Calories</Text>
        <MacroPie macro={calories} goal={TDEE} />
      </View>
    </View>
  );
}
