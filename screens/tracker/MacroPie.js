import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';

export default function MacroPie({ macro, goal, label }) {
  const { theme } = useTheme();
  const remainingGoal = goal - macro;

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text>{label}</Text>
      <Svg viewBox="0 150 420 400">
        <VictoryPie
          width={190}
          style={{
            labels: {
              fill: theme.colors.white,
            },
          }}
          colorScale={['#519085', '#E9E0AC', '#88CED2']}
          containerComponent={
            <VictoryContainer
              width={200}
              style={{ top: '-39%', alignItems: 'center', left: '6%', marginTop: '6%' }}
            />
          }
          innerRadius={30}
          labels={() => null}
          // animate={{ duration: 1000 }}
          data={[
            { x: goal, y: goal },
            { x: macro, y: macro },
          ]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 80, fill: theme.colors.white }}
          x={210}
          y={340}
          text={remainingGoal}
        />
      </Svg>
    </View>
  );
}
