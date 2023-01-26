import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import useMetabolicStore from '../../state/MetabolicStore';

export default function PeriodCalendar() {
  const metabolicState = useMetabolicStore();
  const { metabolicJournal } = metabolicState;
  const [selected, setSelected] = useState(new Date());
  const filterByPeriod = (data) => {
    const marked = {};
    const filteredData = data.filter((item) => item.period && item.period.menstrualFlow !== '');
    filteredData.forEach((item) => {
      const formatDate = moment(item.date, 'MM/DD/YYYY').format('YYYY-MM-DD');
      marked[formatDate] = {
        selected: true,
        selectedColor: '#FF647F',
      };
    });
    return marked;
  };

  // console.log(moment('01/22/2023', 'MM/DD/YYYY').format('YYYY-MM-DD'));

  const marked = useMemo(() => {
    const markedDates = {};
    markedDates[selected] = {
      selected: true,
      selectedColor: '#00000050',
      selectedTextColor: '#000000',
    };
    return {
      ...markedDates,
      ...filterByPeriod(metabolicJournal, { selectedColor: '#FF647F' }),
    };
  }, [selected, metabolicJournal]);

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
