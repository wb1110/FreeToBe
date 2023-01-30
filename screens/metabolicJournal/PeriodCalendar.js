import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { Button } from '@rneui/themed';
import useMetabolicStore from '../../state/MetabolicStore';
import { filterByUnprotectedSex, filterByPeriod } from './calendarFilterFunctions/FilterFunctions';

export default function PeriodCalendar({ navigation }) {
  const metabolicState = useMetabolicStore();
  const { metabolicJournal } = metabolicState;
  const [selectedDate, setSelected] = useState(new Date());

  const marked = useMemo(() => {
    const markedDates = {};
    markedDates[selectedDate] = {
      selected: true,
      selectedColor: '#00000050',
      selectedTextColor: '#000000',
    };
    return {
      ...filterByUnprotectedSex(metabolicJournal),
      ...filterByPeriod(metabolicJournal),
      ...markedDates,
    };
  }, [selectedDate, metabolicJournal]);

  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <View>
        <CalendarList
          markedDates={marked}
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 10, zIndex: 50 }}>
        <Button
          title="Close Calendar"
          onPress={() => navigation.goBack()}
          containerStyle={{ borderRadius: 20 }}
        />
      </View>
    </View>
  );
}
