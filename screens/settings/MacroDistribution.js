import { useTheme, Text, Button } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import ScreenPicker from '../../components/ScreenPicker';
import { getSettings } from '../../functions/Gets';
import percentageSelect from '../../functions/percentageSelect';
import { storeSettings } from '../../functions/Posts';
import useSettingsStore from '../../state/SettingsStore';

export default function MacroDistribution() {
  const { theme } = useTheme();
  const settingsState = useSettingsStore();
  const { updateMacroSettings, macroSettings } = settingsState;
  const { idealCarbs, idealFat, idealProtein } = macroSettings;
  const [proteinPercentage, setProteinPercentage] = useState(idealProtein);
  const [carbPercentage, setCarbPercentage] = useState(idealCarbs);
  const [fatPercentage, setFatPercentage] = useState(idealFat);

  const dataPercentages = percentageSelect(5, 100, 5);

  getSettings();

  return (
    <View style={{ flex: 1 }}>
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
          <ScreenPicker
            value={carbPercentage}
            items={dataPercentages}
            setValue={setCarbPercentage}
          />
        </View>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <Text h4>Fat</Text>
          <ScreenPicker value={fatPercentage} items={dataPercentages} setValue={setFatPercentage} />
        </View>
      </View>
      <Button
        title="Submit"
        onPress={() => {
          updateMacroSettings(proteinPercentage, carbPercentage, fatPercentage);
          storeSettings(macroSettings);
        }}
      />
    </View>
  );
}
