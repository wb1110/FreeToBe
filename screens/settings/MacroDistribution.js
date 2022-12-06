import { useTheme, Text } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import ScreenPicker from '../../components/ScreenPicker';
import percentageSelect from '../../functions/percentageSelect';

export default function MacroDistribution() {
  const { theme } = useTheme();
  const [proteinPercentage, setProteinPercentage] = useState();
  const [carbPercentage, setCarbPercentage] = useState();
  const [fatPercentage, setFatPercentage] = useState();

  const dataPercentages = percentageSelect(5, 100, 5);

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text h4>Protein</Text>
        <ScreenPicker
          value={proteinPercentage}
          items={dataPercentages}
          setValue={setProteinPercentage}
        />
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text h4>Carbohydrate</Text>
        <ScreenPicker value={carbPercentage} items={dataPercentages} setValue={setCarbPercentage} />
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Text h4>Fat</Text>
        <ScreenPicker value={fatPercentage} items={dataPercentages} setValue={setFatPercentage} />
      </View>
    </View>
  );
}
