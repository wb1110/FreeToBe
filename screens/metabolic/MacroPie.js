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
    <View style={{ flex: 1 }}>
      <Svg width="190" height="300" viewBox="0 0 190 300">
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
          style={{ fontSize: 16, fill: theme.colors.white }}
          x={95}
          y={95}
          text={`${TDEE} cal`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 16, fill: theme.colors.white }}
          x={45}
          y={200}
          text={`Proteins: ${protein}`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 16, fill: theme.colors.white }}
          x={66}
          y={220}
          text={`Carbohydrates: ${carb}`}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 16, fill: theme.colors.white }}
          x={30}
          y={240}
          text={`Fats: ${fat}`}
        />
      </Svg>
    </View>
  );
}
