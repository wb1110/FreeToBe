import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import useMetabolicStore from '../../state/MetabolicStore';

export default function PeriodCalendar() {
  const metabolicState = useMetabolicStore();
  const { metabolicJournal } = metabolicState;
  const [selected, setSelected] = useState(new Date());

  function predictOvulationNextPeriod(data, date) {
    const previousDate = moment(date).subtract(1, 'days').format('MM/DD/YYYY');
    const filteredData = data.filter(
      (item) => item.date === previousDate && item.period.menstrualFlow === ''
    );
    if (filteredData) {
      const predictedPeriod = moment(date).add(28, 'days').format('YYYY-MM-DD');
      const predictedOvulation = moment(date).add(14, 'days').format('YYYY-MM-DD');
      return {
        predictedPeriod,
        predictedOvulation,
      };
    }
    return null;
  }

  const filterByPeriod = (data) => {
    const marked = {};
    const filteredData = data.filter((item) => item.period && item.period.menstrualFlow !== '');
    filteredData.forEach((item) => {
      const formatDate = moment(item.date, 'MM/DD/YYYY').format('YYYY-MM-DD');
      const ovulationDate = predictOvulationNextPeriod(
        metabolicJournal,
        item.date
      ).predictedOvulation;
      const nextPeriodDate = predictOvulationNextPeriod(
        metabolicJournal,
        item.date
      ).predictedPeriod;
      marked[formatDate] = {
        selected: true,
        selectedColor: '#FF647F',
      };
      marked[ovulationDate] = {
        selected: true,
        selectedColor: 'yellow',
      };
      marked[nextPeriodDate] = {
        selected: true,
        selectedColor: 'blue',
      };
    });
    return marked;
  };

  // function predictOvulation(cycleLength) {
  //   let predictedOvulation = cycleLength - 14;
  //   if (cycleLength < 28) {
  //     predictedOvulation -= 28 - cycleLength;
  //   } else if (cycleLength > 28) {
  //     predictedOvulation += cycleLength - 28;
  //   }
  //   return predictedOvulation;
  // }

  // Based on the first date of the period for a 28 day cycle, predict the ovulation date, and the date of the next period.
  //   1. When a period is recorded, check if the previous date had recorded a period, and if it did not then set the current date as Day 1 of the cycle.
  //  2. Based on Day 1, calculate the predicted Day 1 of the next cycle, and the ovulation date.

  const filterByUnprotectedSex = (data) => {
    const marked = {};
    const filteredData = data.filter((item) => item.sex.includes('Unprotected Sex'));
    filteredData.forEach((item) => {
      const formatDate = moment(item.date, 'MM/DD/YYYY').format('YYYY-MM-DD');
      marked[formatDate] = {
        marked: true,
        dotColor: 'red',
      };
    });
    return marked;
  };

  const marked = useMemo(() => {
    const markedDates = {};
    markedDates[selected] = {
      selected: true,
      selectedColor: '#00000050',
      selectedTextColor: '#000000',
    };
    return {
      ...filterByUnprotectedSex(metabolicJournal),
      ...filterByPeriod(metabolicJournal),
      ...markedDates,
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
