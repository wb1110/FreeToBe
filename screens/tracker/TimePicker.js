import { useState } from 'react';
import { View } from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

function TimePicker({ mealTime, setTime }) {
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
    console.log(time, 'time');
    console.log(selectedTime, 'selected time');
    setTime(selectedTime);
    hideTimePicker();
  };

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
