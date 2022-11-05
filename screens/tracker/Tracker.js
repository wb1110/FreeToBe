import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';
import { FAB } from '@rneui/themed';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useTrackerStore from '../../state/TrackerStore';
import Calendar from './Calendar';
import MacroBar from './MacroBar';
import Meals from './Meals';

function Tracker({ navigation }) {
  const state = useTrackerStore();

  const { addDate, tracker } = state;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  // trackDate = Date Header
  // date = datePickerDate
  const [dateData, setDateData] = useState();
  // macro bar
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [calories, setCalories] = useState(0);

  function indexExists(array, dateVariable) {
    const objIndex = array.findIndex((obj) => obj.date === dateVariable);
    return objIndex;
  }
  const currentIndex = indexExists(tracker, dateData);

  const getTracker = async () => {
    let parsedResult;
    try {
      const result = await AsyncStorage.getItem('tracker');
      parsedResult = await JSON.parse(result);
      return parsedResult;
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    const asyncWrap = async () => {
      const value = await getTracker();
      await state.updateTracker(value);
    };
    asyncWrap();

    const selectedDate = moment(date).format('L');
    setDateData(selectedDate);
    const savedDate = tracker[indexExists(tracker, selectedDate)];
    if (!savedDate) {
      addDate(selectedDate);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() =>
      // Do something when the screen is focused
      {
        if (tracker[currentIndex]) {
          state.updateMacros(tracker, currentIndex);
          setProtein(tracker[currentIndex].protein);
          setCarbs(tracker[currentIndex].carbs);
          setFats(tracker[currentIndex].fats);
          setCalories(tracker[currentIndex].calories);
        }
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [tracker])
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <Calendar
            isDatePickerVisible={isDatePickerVisible}
            setDatePickerVisibility={setDatePickerVisibility}
            setDateData={setDateData}
            date={date}
            setDate={setDate}
          />
          <MacroBar protein={protein} fats={fats} carbs={carbs} calories={calories} />
          <Meals tracker={tracker} currentIndex={currentIndex} navigation={navigation} />
          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <FAB
              icon={<Ionicons name="add" size={24} color="black" />}
              size="medium"
              color="white"
              style={{ marginRight: '2%', marginBottom: '2%' }}
              onPress={() =>
                navigation.navigate('AddMeal', {
                  dateToAddTo: dateData,
                })
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
