import { Text, useTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';

export default function MacroPie({ macro, goal }) {
  const { theme } = useTheme();
  const remainingGoal = goal - macro;

  return (
    <SafeAreaView>
      <Svg viewBox="0 160 400 400">
        <VictoryPie
          width={125}
          style={{
            labels: {
              fill: theme.colors.white,
            },
          }}
          colorScale={['#519085', '#E9E0AC', '#88CED2']}
          containerComponent={<VictoryContainer width={150} style={{ top: '-40%' }} />}
          innerRadius={25}
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
          x={120}
          y={415}
          text={remainingGoal}
        />
      </Svg>
    </SafeAreaView>
  );
}
