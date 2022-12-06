import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';
import useSettingsStore from '../../state/SettingsStore';

export default function MacroPie({ TDEE }) {
  const { theme } = useTheme();
  const settingsState = useSettingsStore();
  const { idealCarbs, idealProtein, idealFat } = settingsState.macroSettings;

  let protein;
  let carb;
  let fat;

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
          width={190}
          height={190}
          style={{
            labels: {
              fill: theme.colors.white,
            },
          }}
          labels={() => null}
          colorScale={['#519085', '#E9E0AC', '#88CED2']}
          containerComponent={<VictoryContainer width={190} height={300} />}
          innerRadius={80}
          // animate={{ duration: 1000 }}
          data={[
            { x: protein, y: protein },
            { x: `Carbohydrates ${carb}g`, y: carb },
            { x: `Fats ${fat}g`, y: fat },
          ]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 32, fill: theme.colors.white }}
          x={95}
          y={140}
          text={`${TDEE} cal`}
        />
      </Svg>
      <View style={{ alignItems: 'center' }}>
        <Button title="Details" />
        {/* <Text>Proteins:{protein}</Text>
        <Text>Carbohydrates:{carb}</Text>
        <Text>Fats:{fat}</Text> */}
      </View>
    </View>
  );
}
