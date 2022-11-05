import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useState } from 'react';
import moment from 'moment';

export default function Calendar({
  isDatePickerVisible,
  setDatePickerVisibility,
  setDateData,
  date,
  setDate,
}) {
  const [trackDate, setTrackDate] = useState('Today');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (newDate) => {
    const formatDate = moment(newDate).format('dddd, MMMM Do YYYY');
    const databaseDate = moment(newDate).format('L');
    setDate(newDate);
    setTrackDate(formatDate);
    setDateData(databaseDate);
    hideDatePicker();
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text h4 onPress={showDatePicker}>{`${trackDate}`}</Text>
        <Ionicons name="chevron-down-circle" size={24} color="white" onPress={showDatePicker} />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={date}
        display="inline"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
