/* eslint-disable global-require */
import { Button, Text } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { v4 as uuidv4 } from 'uuid';

export default function CreateSleepEntry({ metabolicData, setMetabolicData }) {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [values, setValues] = useState({
    id: uuidv4(),
    startTime: start,
    endTime: end,
  });

  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleConfirmStart = (date) => {
    const currentDate = date;
    setStart(currentDate);
    setValues({ ...values, id: uuidv4(), startTime: currentDate });
    hideStartDatePicker();
  };

  const handleConfirmEnd = (date) => {
    const currentDate = date;
    setEnd(currentDate);
    setValues({ ...values, id: uuidv4(), endTime: currentDate });
    hideEndDatePicker();
  };

  const handleSubmit = (v) => {
    setMetabolicData({
      ...metabolicData,
      sleep: [...(metabolicData.sleep || []), v],
    });
  };

  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Button onPress={showStartDatePicker} title="Select Start" />
          <Text>Start: {start.toLocaleString()}</Text>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirmStart}
            onCancel={hideStartDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirmEnd}
            onCancel={hideEndDatePicker}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Button onPress={showEndDatePicker} title="Select End" />
          <Text>End: {end.toLocaleString()}</Text>
        </View>
      </View>

      <Button title="Add sleep" onPress={() => handleSubmit(values)} />
    </View>
  );
}
