import { useTheme } from '@rneui/themed';
import { useCallback, useEffect, useState } from 'react';
import { VictoryPie } from 'victory-native';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/core';
import useTrackerStore from '../../state/TrackerStore';

export default function MacroPie() {
  const { theme } = useTheme();
  const trackerState = useTrackerStore();
  const { tracker } = trackerState;
  const [data, setData] = useState([{ y: 1 }]);
  const [innerRadius, setInnerRadius] = useState(30);

  function getCurrentData(dataArray) {
    const today = moment(new Date()).format('MM/DD/YYYY');
    const todayObject = dataArray.find((item) => item.date === today);
    if (todayObject) {
      return todayObject;
    }
    return {
      carbs: 0,
      protein: 0,
      fats: 0,
    };
  }
  const { carbs, protein, fats } = getCurrentData(tracker);

  useFocusEffect(
    useCallback(() =>
      // Do something when the screen is focused
      {
        if (protein || carbs || fats > 0) {
          setData([
            { x: protein, y: protein, fill: '#283618' },
            { x: carbs, y: carbs, fill: '#F5F5DC' },
            { x: fats, y: fats, fill: '#800020' },
          ]);
          // setInnerRadius(30);
        } else {
          setData([{ y: 1, fill: theme.colors.primary }]);
          setInnerRadius(0);
        }
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [carbs, protein, fats])
  );

  return (
    <VictoryPie
      width={200}
      height={200}
      labels={() => null}
      innerRadius={innerRadius}
      style={{
        data: {
          fill: ({ datum }) => datum.fill,
        },
      }}
      // animate={{ duration: 1000 }}
      data={data}
    />
  );
}
