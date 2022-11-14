import { SafeAreaView, View } from 'react-native';
import { Text } from '@rneui/themed';
import useStore from '../../state/Store';
import MacroPie from './MacroPie';
import MineralsPie from './MineralsPie';

function HomeTab() {
  const state = useStore();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Macros and Minerals Visuals */}
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '2%', flex: 2 }}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Macros</Text>
          {state.assessment ? (
            <MacroPie TDEE={state.assessment.tdee} />
          ) : (
            <Text>Missing Assessment Data</Text>
          )}
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Minerals</Text>
          <MineralsPie />
        </View>
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text>What helps fuel our bodies?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ borderWidth: '1%', flex: 1 }}>
            <Text>Proteins</Text>
          </View>
          <View style={{ borderWidth: '1%', flex: 1 }}>
            <Text>Fats</Text>
          </View>
          <View style={{ borderWidth: '1%', flex: 1 }}>
            <Text>Carbs</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeTab;
