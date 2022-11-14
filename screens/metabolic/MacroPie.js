import { Text, useTheme } from '@rneui/themed';
import { View, SafeAreaView } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';

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
    <View>
      <Svg width="100%" height="100%">
        <VictoryPie
          width={150}
          style={{
            labels: {
              fill: theme.colors.white,
            },
          }}
          labels={() => null}
          colorScale={['#519085', '#E9E0AC', '#88CED2']}
          containerComponent={<VictoryContainer width={120} style={{ borderWidth: 1 }} />}
          innerRadius={50}
          // animate={{ duration: 1000 }}
          data={[
            { x: protein, y: protein, label: null },
            { x: `Carbohydrates ${carb}g`, y: carb },
            { x: `Fats ${fat}g`, y: fat },
          ]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 16, fill: theme.colors.white }}
          x={0}
          y={0}
          text={`${TDEE} cal`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 36, fill: theme.colors.white }}
          x={300}
          y={400}
          text={`Proteins: ${protein}`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 36, fill: theme.colors.white }}
          x={300}
          y={420}
          text={`Carbohydrates: ${carb}`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 36, fill: theme.colors.white }}
          x={300}
          y={150}
          text={`Fats: ${fat}`}
        />
      </Svg>
    </View>
  );
}
