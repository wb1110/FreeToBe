import { useFocusEffect } from '@react-navigation/core';
import { Text, useTheme } from '@rneui/themed';
import { useCallback, useState } from 'react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryContainer, VictoryLabel, VictoryPie } from 'victory-native';

export default function MacroPie({ macro, goal, label, complete, unit }) {
  const { theme } = useTheme();
  const [data, setData] = useState([{ y: 1 }]);
  const [labelText, setLabelText] = useState(0);
  const [labelColor, setLabelColor] = useState(theme.colors.primary);
  const [innerRadius, setInnerRadius] = useState(30);
  const remainingGoal = (goal - macro).toFixed(0);

  useFocusEffect(
    useCallback(() =>
      // Do something when the screen is focused
      {
        // A function that outputs for 3day log, unfinished goal, and finished goal.
        // const macroBarStates = (complete, macro, goal, data) => {
        // User is completing 3 day log
        if (complete) {
          if (remainingGoal > 0) {
            // Display the grams and calories that need to be consumed, progress and completed colors, and a hollow circle.
            setLabelText(remainingGoal);
            setLabelColor(theme.colors.primary);
            setData([
              { x: goal, y: goal, fill: theme.colors.chart1 },
              { x: macro, y: macro, fill: theme.colors.chart2 },
            ]);
            setInnerRadius(30);
          } else if (remainingGoal <= 0) {
            // Display the total grams/calories, and fill in the circle with the completed color.
            setLabelText(macro.toFixed(0));
            setLabelColor(theme.colors.primary);
            setData([{ y: 1, fill: theme.colors.chart2 }]);
            setInnerRadius(0);
          }
        } else {
          // data.push(
          //   // if the 3 day log is not completed, only use macro numbers and add up
          //   { x: macro, y: macro }
          // );

          setInnerRadius(30);
          setData([{ y: 1, fill: theme.colors.chart1 }]);
          setLabelText(macro.toFixed(0));
        }
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [remainingGoal])
  );
  // User has not complete the goal yet

  // User has completed the goal
  // };

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text h4 h4Style={{ color: labelColor }}>
        {label}
      </Text>
      <Text
        h4
        h4Style={{
          position: 'absolute',
          zIndex: 2,
          top: 45,
          color: labelColor,
          textAlign: 'center',
        }}
      >
        {labelText}
        {`\n`}
        {unit}
      </Text>
      <Svg viewBox="0 150 420 400">
        <VictoryPie
          width={190}
          style={{
            labels: {
              fill: theme.colors.white,
            },
            data: {
              fill: ({ datum }) => datum.fill,
            },
          }}
          containerComponent={
            <VictoryContainer
              width={200}
              style={{ top: '-39%', alignItems: 'center', left: '6%', marginTop: '6%' }}
            />
          }
          innerRadius={innerRadius}
          labels={() => null}
          // animate={{ duration: 1000 }}
          data={data}
        />
        {/* <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 80, fill: theme.colors.primary }}
          x={210}
          y={340}
          // if (complete === false) only use macro numbers
          text={labelText}
        /> */}
      </Svg>
    </View>
  );
}
