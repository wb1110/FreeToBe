/* eslint-disable global-require */
import { Button, Text } from '@rneui/themed';
import moment from 'moment';
import { useState } from 'react';
import { View } from 'react-native';
import 'react-native-get-random-values';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { v4 as uuidv4 } from 'uuid';

export default function CreateSleepEntry({ metabolicData, setMetabolicData }) {
  const [start, setStart] = useState('Select Start');
  const [end, setEnd] = useState('Select End');
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
        alignItems: 'center',

        margin: '2%',
      }}
    >
      <Text h4 style={{ marginBottom: '2%' }}>
        Add a new sleep session:
      </Text>
      <View>
        <View style={{ alignItems: 'flex-start' }}>
          <Button
            onPress={showStartDatePicker}
            title={
              start === 'Select Start' ? 'Select Start' : `${moment(start).format('dddd, h:mm a')}`
            }
            style={{ width: 200, marginBottom: '2%' }}
          />
          <DateTimePickerModal
            isVisible={isStartDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirmStart}
            onCancel={hideStartDatePicker}
          />
        </View>
        <View style={{ alignItems: 'flex-start', marginBottom: '2%' }}>
          <Button
            onPress={showEndDatePicker}
            title={end === 'Select End' ? 'Select End' : `${moment(end).format('dddd, h:mm a')}`}
            style={{ width: 200 }}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirmEnd}
            onCancel={hideEndDatePicker}
          />
        </View>
      </View>
      <Button title="Add sleep" onPress={() => handleSubmit(values)} />
    </View>
  );
}
