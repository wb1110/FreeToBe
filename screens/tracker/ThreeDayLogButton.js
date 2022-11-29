import { useFocusEffect } from '@react-navigation/core';
import { Button, useTheme } from '@rneui/themed';
import { useCallback, useState } from 'react';
import { View } from 'react-native';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';

export default function ThreeDayLogButton({ selectedDay }) {
  const { theme } = useTheme();
  const threeDayState = useThreeDayLogStore();
  const { addDay, threeDayLog } = threeDayState;
  const [submitted, setSubmitted] = useState(false);
  const [dayNumber, setDayNumber] = useState(1);
  // console.log(threeDayLog[0].date, '3day');
  // console.log(selectedDay.date, 'selected');
  const [title, setTitle] = useState(`Three Day Log: Submit Day ${dayNumber}`);

  const daySubmitted = () => {
    if (threeDayLog[0]?.date === selectedDay.date) {
      setSubmitted(true);
      setTitle(`Three Day Log: Day 1 Submitted`);
    }
    if (threeDayLog[1]?.date === selectedDay.date) {
      setSubmitted(true);
      setTitle(`Three Day Log: Day 2 Submitted`);
    }
    if (threeDayLog[2]?.date === selectedDay.date) {
      setSubmitted(true);
      setTitle(`Three Day Log: Day 3 Submitted`);
    }
  };

  const dayFilter = () => {
    if (threeDayLog?.length > 0) {
      if (threeDayLog.length === 1 && threeDayLog[0]?.date !== selectedDay.date) {
        setSubmitted(false);
        setDayNumber(2);
        setTitle(`Three Day Log: Submit Day ${dayNumber}`);
      }
      if (
        threeDayLog.length === 2 &&
        threeDayLog[1]?.date !== selectedDay.date &&
        threeDayLog[0]?.date !== selectedDay.date
      ) {
        setSubmitted(false);
        setDayNumber(3);
        setTitle(`Three Day Log: Submit Day ${dayNumber}`);
      }
    } else {
      setDayNumber(1);
    }
    return dayNumber;
  };

  const conditionalTitle = () => {
    daySubmitted();
    setSubmitted(true);
    setTitle(`Three Day Log: Day ${dayNumber} Submitted`);
  };

  useFocusEffect(
    useCallback(() =>
      // Do something when the screen is focused
      {
        daySubmitted();
        dayFilter();
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [selectedDay, dayNumber, title])
  );

  return (
    <View style={{ alignItems: 'center', marginTop: '8%' }}>
      <Button
        titleStyle={{
          color: theme.colors.primary,
        }}
        disabled={submitted}
        containerStyle={{ width: '90%' }}
        color={theme.colors.white}
        onPress={() => {
          addDay(selectedDay);
          conditionalTitle();
        }}
        title={title}
        size="sm"
      />
    </View>
  );
}
