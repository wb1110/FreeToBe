import { TouchableOpacity, View } from 'react-native';
import { Text } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function PeriodCalendar({
  isDatePickerVisible,
  setDatePickerVisibility,
  setDateData,
  date,
  setDate,
}) {
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (newDate) => {
    const databaseDate = moment(newDate).format('L');
    setDate(newDate);
    setDateData(databaseDate);
    hideDatePicker();
  };

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <TouchableOpacity onPress={showDatePicker} style={{ alignItems: 'center' }}>
        <FontAwesome name="calendar" size={36} color="white" />
        <Text>Log dates</Text>
      </TouchableOpacity>
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
