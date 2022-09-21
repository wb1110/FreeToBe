import { Text } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import {
  day as dataDay,
  month as dataMonth,
  year as dataYear,
} from '../assets/data/monthDayYearData';
import RoundButton from './Buttons/RoundButton';
import RoundButtonSelected from './Buttons/RoundButtonSelected';
import StandardButton from './Buttons/StandardButton';
import MyCustomerPicker from './MyCustomerPicker';

function IsPregnant({ navigation }) {
  const [babies, setBabies] = useState(0);

  const [monthModal, setMonthModal] = useState(false);
  const [dayModal, setDayModal] = useState(false);
  const [yearModal, setYearModal] = useState(false);

  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  return (
    <View style={{ alignItems: 'center' }}>
      <Text h4>How many babies are you carrying?</Text>
      <View style={{ flexDirection: 'row' }}>
        {babies === 1 ? (
          <RoundButtonSelected title="1" onPress={() => setBabies(1)} />
        ) : (
          <RoundButton title="1" onPress={() => setBabies(1)} />
        )}
        {babies === 2 ? (
          <RoundButtonSelected title="2" onPress={() => setBabies(2)} />
        ) : (
          <RoundButton title="2" onPress={() => setBabies(2)} />
        )}
        {babies === 3 ? (
          <RoundButtonSelected title="3" onPress={() => setBabies(3)} />
        ) : (
          <RoundButton title="3" onPress={() => setBabies(3)} />
        )}
        {babies === 4 ? (
          <RoundButtonSelected title="4" onPress={() => setBabies(4)} />
        ) : (
          <RoundButton title="4" onPress={() => setBabies(4)} />
        )}
        {babies === 5 ? (
          <RoundButtonSelected title="5" onPress={() => setBabies(5)} />
        ) : (
          <RoundButton title="5" onPress={() => setBabies(5)} />
        )}
        {babies === 6 ? (
          <RoundButtonSelected title="6" onPress={() => setBabies(6)} />
        ) : (
          <RoundButton title="6" onPress={() => setBabies(6)} />
        )}
      </View>
      <MyCustomerPicker
        setModalOpen={setMonthModal}
        modalOpen={monthModal}
        value={month}
        items={dataMonth}
        setValue={setMonth}
      />
      <StandardButton title={`Month: ${month}`} onPress={() => setMonthModal(!monthModal)} />
      <MyCustomerPicker
        setModalOpen={setDayModal}
        modalOpen={dayModal}
        value={day}
        items={dataDay}
        setValue={setDay}
      />
      <StandardButton title={`Day: ${day}`} onPress={() => setDayModal(!dayModal)} />
      <MyCustomerPicker
        setModalOpen={setYearModal}
        modalOpen={yearModal}
        value={year}
        items={dataYear}
        setValue={setYear}
      />
      <StandardButton title={`Year: ${year}`} onPress={() => setYearModal(!yearModal)} />
      {babies && month && day && year ? (
        <StandardButton
          title="Submit"
          onPress={() => {
            navigation.navigate('Nursing');
          }}
        />
      ) : (
        <StandardButton title="Submit" disabled />
      )}
    </View>
  );
}

export default IsPregnant;
