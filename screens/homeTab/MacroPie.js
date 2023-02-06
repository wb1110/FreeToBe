import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';
import useTrackerStore from '../../state/TrackerStore';

export default function MacroPie({ navigation }) {
  const { theme } = useTheme();
  const trackerState = useTrackerStore();
  const { goalCalories, goalCarbs, goalProtein, goalFat } = trackerState;

  const carbPercent = (((goalCarbs * 4) / goalCalories) * 100).toFixed(2);
  const proteinPercent = (((goalProtein * 4) / goalCalories) * 100).toFixed(2);
  const fatPercent = (((goalFat * 9) / goalCalories) * 100).toFixed(2);

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
          colorScale={['#283618', '#F5F5DC', '#800020']}
          containerComponent={<VictoryContainer width={190} height={300} />}
          innerRadius={60}
          // animate={{ duration: 1000 }}
          data={[
            { x: proteinPercent, y: proteinPercent },
            { x: carbPercent, y: carbPercent },
            { x: fatPercent, y: fatPercent },
          ]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 32, fill: theme.colors.white }}
          x={95}
          y={150}
          text={`${goalCalories.toFixed(2)}\nkCal`}
        />
      </Svg>
      {/* <View style={{ alignItems: 'center' }}>
        <Button title="Details" onPress={() => navigation.navigate('MacroDetails')} />
        {/* <Text>Proteins:{protein}</Text>
        <Text>Carbohydrates:{carb}</Text>
        <Text>Fats:{fat}</Text>
      </View> */}
    </View>
  );
}
