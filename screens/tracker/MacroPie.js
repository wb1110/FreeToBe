import { Text, useTheme } from '@rneui/themed';
import { SafeAreaView, View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';

export default function MacroPie({ macro, goal }) {
  const { theme } = useTheme();
  const remainingGoal = goal - macro;

  return (
    <View style={{ width: '100%' }}>
      <Svg viewBox="0 160 400 400">
        <VictoryPie
          width={190}
          style={{
            labels: {
              fill: theme.colors.white,
            },
          }}
          colorScale={['#519085', '#E9E0AC', '#88CED2']}
          containerComponent={
            <VictoryContainer width={200} style={{ top: '-39%', left: '-40%' }} />
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
          style={{ fontSize: 60, fill: theme.colors.white }}
          x={210}
          y={340}
          text={remainingGoal}
        />
      </Svg>
    </View>
  );
}
