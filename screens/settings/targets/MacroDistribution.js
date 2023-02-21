import { Button, Text, useTheme } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import ScreenPicker from '../../../components/ScreenPicker';
import { getSettings } from '../../../functions/Gets';
import percentageSelect from '../../../functions/percentageSelect';
import useAuthStore from '../../../state/AuthStore';
import useSettingsStore from '../../../state/SettingsStore';
import useStore from '../../../state/Store';

export default function MacroDistribution({ navigation }) {
  const { theme } = useTheme();
  const { id } = useAuthStore();
  const state = useStore();
  const settingsState = useSettingsStore();
  const { updateMacroSettings, macroSettings } = settingsState;
  const { idealCarbs, idealFat, idealProtein } = macroSettings;
  const [proteinPercentage, setProteinPercentage] = useState(idealProtein);
  const [carbPercentage, setCarbPercentage] = useState(idealCarbs);
  const [fatPercentage, setFatPercentage] = useState(idealFat);

  let protein;
  let carb;
  let fat;

  const dataPercentages = percentageSelect(5, 95, 5);

  const macroOptions = () => {
    protein = Math.round((state.assessment.tdee * (parseFloat(idealProtein) / 100)) / 4);
    carb = Math.round((state.assessment.tdee * (parseFloat(idealCarbs) / 100)) / 4);
    fat = Math.round((state.assessment.tdee * (parseFloat(idealFat) / 100)) / 9);
  };

  useEffect(() => {
    macroOptions();
    console.log(settingsState, 'MacroDistribution');
  }, [settingsState.macroSettings]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}
    >
      <LArrowButton onPress={() => navigation.goBack()} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <Text h4 style={{ textAlign: 'center' }}>
            Total Daily Energy Expenditure (TDEE) End Goal
          </Text>
          <Text h4>{state.assessment.tdee} kCal</Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            height: 250,
            backgroundColor: theme.colors.secondary,
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 25,
            padding: 16,
            marginBottom: 24,
          }}
        >
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              paddingTop: 16,
            }}
          >
            <Text h4>Protein</Text>
            <Text>{protein ?? 0} g</Text>
            <ScreenPicker
              value={proteinPercentage}
              items={dataPercentages}
              setValue={setProteinPercentage}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              paddingTop: 16,
            }}
          >
            <Text h4>Carbohydrate</Text>
            <Text>{carb ?? 0} g</Text>
            <ScreenPicker
              value={carbPercentage}
              items={dataPercentages}
              setValue={setCarbPercentage}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              paddingTop: 16,
            }}
          >
            <Text h4>Fat</Text>
            <Text>{fat ?? 0} g</Text>
            <ScreenPicker
              value={fatPercentage}
              items={dataPercentages}
              setValue={setFatPercentage}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            title="Submit"
            onPress={() => {
              updateMacroSettings(id, proteinPercentage, carbPercentage, fatPercentage);
            }}
            color="white"
            titleStyle={{ color: theme.colors.primary }}
            size="lg"
          />
        </View>
      </View>
    </View>
  );
}
