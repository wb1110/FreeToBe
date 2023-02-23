import { View } from 'react-native';
import MacroPie from '../MacroPie';
import Table from './MacroTable';

export default function Slide1({ carbs, fats, protein, navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1, alignItems: 'center' }}>
        <MacroPie carbs={carbs} fats={fats} protein={protein} navigation={navigation} />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Table />
      </View>
    </View>
  );
}
