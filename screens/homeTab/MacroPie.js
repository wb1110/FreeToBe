import { useFocusEffect } from '@react-navigation/core';
import { useTheme } from '@rneui/themed';
import { useCallback, useState } from 'react';
import { VictoryPie } from 'victory-native';

export default function MacroPie({ carbs, protein, fats }) {
  const { theme } = useTheme();
  const [data, setData] = useState([{ y: 1 }]);
  const [innerRadius, setInnerRadius] = useState(40);

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
          setInnerRadius(40);
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
      width={250}
      height={250}
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
