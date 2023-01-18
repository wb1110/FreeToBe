/* eslint-disable global-require */
import { Button, Input } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateSleepEntry({ metabolicData, setMetabolicData }) {
  const [start, setStart] = useState(new Date(1598051730000));
  const [end, setEnd] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    id: uuidv4(),
    startTime: start,
    endTime: end,
  });

  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setStart(currentDate);
    setValues({ ...values, startTime: currentDate });
  };

  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setEnd(currentDate);
    setValues({ ...values, endTime: currentDate });
  };

  const showTimepicker = () => {
    setShow(!show);
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
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
        <DateTimePicker
          testID="dateTimePicker"
          value={start}
          mode="time"
          is24Hour
          onChange={onStartChange}
        />
        <DateTimePicker
          testID="dateTimePicker"
          value={end}
          mode="time"
          is24Hour
          onChange={onEndChange}
        />
      </View>
      <Button title="Add sleep" onPress={() => handleSubmit(values)} />
    </View>
  );
}
