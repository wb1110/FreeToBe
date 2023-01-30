import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { Button } from '@rneui/themed';
import useMetabolicStore from '../../state/MetabolicStore';
import { filterByUnprotectedSex, filterByPeriod, filterByOvulationWindow } from './calendarFilterFunctions/FilterFunctions';

export default function PeriodCalendar({ navigation }) {
  const { metabolicJournal } = useMetabolicStore();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

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
      ...filterByOvulationWindow(metabolicJournal),
      ...markedDates,
    };
  }, [selectedDate, metabolicJournal]);

  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <View>
        <CalendarList
          markedDates={marked}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
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
