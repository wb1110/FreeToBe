import { Button, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';
import StandardButton from '../../components/Buttons/StandardButton';

export default function MacroPie({ TDEE }) {
  const { theme } = useTheme();

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

  macroOptions(1);

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
