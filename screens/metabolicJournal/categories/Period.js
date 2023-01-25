/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import Flow from './PeriodSubCategories/Flow';
import Symptoms from './PeriodSubCategories/Symptoms';

export default function Period({ metabolicData, setMetabolicData }) {
  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
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
            <DateTimePicker testID="dateTimePicker" value={date} mode="date" onChange={onChange} />
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
