import { View } from 'react-native';
import { Text, useTheme } from '@rneui/themed';
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
  // trackDate = Date Header
  const [trackDate, setTrackDate] = useState('Today');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const { theme } = useTheme();

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
    <View style={{ alignItems: 'center', marginTop: '2%' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text
          h4
          h4Style={{ color: theme.colors.primary }}
          onPress={showDatePicker}
        >{`${trackDate}`}</Text>
        <Ionicons
          name="chevron-down-circle"
          size={24}
          color={theme.colors.primary}
          onPress={showDatePicker}
        />
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
