/* eslint-disable global-require */
import { Button, Input, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Platform, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function CreateSleepEntry({ metabolicData, setMetabolicData }) {
  const { theme } = useTheme();
  const [start, setStart] = useState(new Date(1598051730000));
  const [end, setEnd] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    id: uuidv4(),
    startTime: start,
    endTime: end,
  });

  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
    setMode('date');
  };

  const showStartTimePicker = () => {
    setStartDatePickerVisibility(true);
    setMode('time');
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
    setMode('date');
  };

  const showEndTimePicker = () => {
    setEndDatePickerVisibility(true);
    setMode('time');
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
          <Button onPress={showStartDatePicker} title="Select Start Date" />
          <Button onPress={showStartTimePicker} title="Select Start Time" />
          <Text>Start: {start.toLocaleString()}</Text>
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode={mode}
            onConfirm={handleConfirmStart}
            onCancel={hideStartDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode={mode}
            onConfirm={handleConfirmEnd}
            onCancel={hideEndDatePicker}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Button onPress={showEndDatePicker} title="Select Start Date" />
          <Button onPress={showEndTimePicker} title="Select Start Time" />
          <Text>End: {end.toLocaleString()}</Text>
        </View>
      </View>

      <Button title="Add sleep" onPress={() => handleSubmit(values)} />
    </View>
  );
}
