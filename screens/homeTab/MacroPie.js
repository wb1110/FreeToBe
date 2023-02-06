import { useTheme } from '@rneui/themed';
import { VictoryPie } from 'victory-native';
import useTrackerStore from '../../state/TrackerStore';

export default function MacroPie() {
  const { theme } = useTheme();
  const trackerState = useTrackerStore();
  const { goalCalories, goalCarbs, goalProtein, goalFat } = trackerState;

  const carbPercent = (((goalCarbs * 4) / goalCalories) * 100).toFixed(2);
  const proteinPercent = (((goalProtein * 4) / goalCalories) * 100).toFixed(2);
  const fatPercent = (((goalFat * 9) / goalCalories) * 100).toFixed(2);

  return (
    <VictoryPie
      width={200}
      height={200}
      style={{
        labels: {
          fill: theme.colors.white,
        },
      }}
      labels={() => null}
      colorScale={['#283618', '#F5F5DC', '#800020']}
      innerRadius={70}
      // animate={{ duration: 1000 }}
      data={[
        { x: proteinPercent, y: proteinPercent },
        { x: carbPercent, y: carbPercent },
        { x: fatPercent, y: fatPercent },
      ]}
    />
  );
}
