/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useMemo, useState } from 'react';
import Flow from './PeriodSubCategories/Flow';
import Symptoms from './PeriodSubCategories/Symptoms';

export default function Period({ metabolicData, setMetabolicData }) {
  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
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
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <ScrollView
        directionalLockEnabled
        contentContainerStyle={{ flexGrow: 1, paddingRight: 200, flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <Text h3>Period</Text>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <Calendar
              markedDates={marked}
              onDayPress={(day) => {
                setSelected(day.dateString);
              }}
            />
            <Text h4>Symptoms</Text>
            <Symptoms metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
            <Text h4>Menstrual Flow</Text>
            <Flow metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
