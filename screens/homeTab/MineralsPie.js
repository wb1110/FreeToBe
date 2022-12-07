import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryPie } from 'victory-native';
import useSettingsStore from '../../state/SettingsStore';

export default function MineralsPie({ TDEE, navigation }) {
  const { theme } = useTheme();
  const settingsState = useSettingsStore();
  const { idealCarbs, idealProtein, idealFat } = settingsState.macroSettings;

  let protein;
  let carb;
  let fat;

  // The below function takes the user's selected percentage for each macro, and converts to grams based on TDEE
  const macroOptions = () => {
    protein = Math.round((TDEE * (parseFloat(idealProtein) / 100)) / 4);
    carb = Math.round((TDEE * (parseFloat(idealCarbs) / 100)) / 4);
    fat = Math.round((TDEE * (parseFloat(idealFat) / 100)) / 9);
  };

  macroOptions();

  return (
    <View style={{ flex: 1 }}>
      <Svg width="190" height="200" viewBox="0 0 190 300">
        <VictoryPie
          data={[
            { x: 'Calcium', y: 10 },
            { x: `Choline`, y: 10 },
            { x: `Copper`, y: 10 },
            { x: 'Iodine', y: 10 },
            { x: `Iron`, y: 10 },
            { x: `Magnesium`, y: 10 },
            { x: 'Phosphorous', y: 10 },
            { x: `Potassium`, y: 10 },
            { x: `Selenium`, y: 10 },
            { x: 'Sodium', y: 10 },
            { x: `Zinc`, y: 10 },
          ]}
          width={190}
          height={190}
          style={{
            labels: {
              fill: theme.colors.white,
              display: 'none',
            },
          }}
          containerComponent={<VictoryContainer width={190} height={300} />}
          innerRadius={80}
          // animate={{ duration: 1000 }}
        />
      </Svg>
      <View style={{ alignItems: 'center' }}>
        <Button
          title="Details"
          onPress={() =>
            navigation.navigate('MineralDetails', {
              protein,
              carb,
              fat,
              idealFat,
              idealCarbs,
              idealProtein,
            })
          }
        />
        {/* <Text>Calcium: 10</Text>
        <Text>Choline: 10</Text>
        <Text>Copper: 10</Text>
        <Text>Iodine: 10</Text>
        <Text>Iron: 10</Text>
        <Text>Magnesium: 10</Text>
        <Text>Phosphorous: 10</Text>
        <Text>Potassium: 10</Text>
        <Text>Selenium: 10</Text>
        <Text>Sodium: 10</Text>
        <Text>Zinc: 10</Text> */}
      </View>
    </View>
  );
}
