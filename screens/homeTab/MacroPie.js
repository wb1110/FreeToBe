import { useTheme } from '@rneui/themed';
import { useEffect } from 'react';
import { VictoryPie } from 'victory-native';
import moment from 'moment';
import useTrackerStore from '../../state/TrackerStore';

export default function MacroPie() {
  const { theme } = useTheme();
  const trackerState = useTrackerStore();
  const { tracker } = trackerState;

  function getCurrentData(dataArray) {
    const today = moment(new Date()).format('MM/DD/YYYY');
    return dataArray.find((item) => item.date === today);
  }
  const { carbs, protein, fats } = getCurrentData(tracker);

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
        { x: protein, y: protein },
        { x: carbs, y: carbs },
        { x: fats, y: fats },
      ]}
    />
  );
}
