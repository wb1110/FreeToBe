/* eslint-disable global-require */
import { Button, Input, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import DateTimePicker from '@react-native-community/datetimepicker';

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

  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setStart(currentDate);
    setValues({ ...values, id: uuidv4(), startTime: currentDate });
  };

  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setEnd(currentDate);
    setValues({ ...values, id: uuidv4(), endTime: currentDate });
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
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
          <Button onPress={showDatepicker} title="Select Start Date" />
          <Button onPress={showTimepicker} title="Select Start Time" />
          <Text>Start: {start.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={start}
              mode={mode}
              is24Hour
              onChange={onStartChange}
            />
          )}
        </View>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Button onPress={showDatepicker} title="Select Start Date" />
          <Button onPress={showTimepicker} title="Select Start Time" />
          <Text>End: {end.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={end}
              mode={mode}
              is24Hour
              onChange={onEndChange}
            />
          )}
        </View>
      </View>

      <Button title="Add sleep" onPress={() => handleSubmit(values)} />
    </View>
  );
}
