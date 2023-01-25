import { TouchableOpacity, View } from 'react-native';
import { Text } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { CalendarList } from 'react-native-calendars';
import { useMemo, useState } from 'react';

export default function PeriodCalendar() {
  const [selected, setSelected] = useState(new Date());
  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: '#00000050',
        selectedTextColor: '#000000',
      },
    }),
    [selected]
  );

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <CalendarList
        markedDates={marked}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
      />
    </View>
  );
}
