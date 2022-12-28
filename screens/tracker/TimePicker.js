import { useState } from 'react';
import { View } from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import useTrackerStore from '../../state/TrackerStore';

function TimePicker({ mealTime, setTime, dayIndex, mealID }) {
  const trackerState = useTrackerStore();
  const { addMealTime } = trackerState;
  const { theme } = useTheme();
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    const selectedTime = moment(time).format('hh:mm A');
    setTime(selectedTime);
    addMealTime(selectedTime, dayIndex, mealID);
    hideTimePicker();
  };

  console.log(mealTime, 'mealTime');

  return (
    <View>
      <Button
        title={!mealTime ? 'Add Time' : mealTime}
        size="sm"
        titleStyle={{
          color: theme.colors.primary,
        }}
        color={theme.colors.white}
        onPress={showTimePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

export default TimePicker;
