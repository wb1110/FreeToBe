import { useFocusEffect } from '@react-navigation/core';
import { useCallback, useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useTrackerStore from '../../state/TrackerStore';
import addNewDate from '../../functions/AddNewDate';
import Calendar from './Calendar';
import MacroBar from './MacroBar';
import Meals from './Meals';
import { getTracker, getThreeDayLog } from '../../functions/Gets';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';
import ThreeDayLogButton from './ThreeDayLogButton';

function Tracker({ navigation }) {
  const state = useTrackerStore();
  const { addDate, tracker } = state;

  const threeDayState = useThreeDayLogStore();
  const { threeDayLog } = threeDayState;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // date = datePickerDate
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState();
  // macro bar
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [calories, setCalories] = useState(0);

  function indexExists(array, dateVariable) {
    if (array.length != null) {
      const objIndex = array.findIndex((obj) => obj.date === dateVariable);
      return objIndex;
    }
    return null;
  }
  const currentIndex = indexExists(tracker, dateData);
  const selectedDay = tracker[indexExists(tracker, dateData)];

  useEffect(() => {
    getTracker(state);
    getThreeDayLog(threeDayState);
    addNewDate(date, setDateData, indexExists, tracker, addDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() =>
      // Do something when the screen is focused
      {
        addNewDate(date, setDateData, indexExists, tracker, addDate);
        if (selectedDay) {
          state.updateMacros(tracker, currentIndex);
          setProtein(selectedDay.protein);
          setCarbs(selectedDay.carbs);
          setFats(selectedDay.fats);
          setCalories(selectedDay.calories);
        }
        // if (tracker[currentIndex].date !== threeDayLog[0]) {
        //   console.log('test');
        // } else {
        //   console.log('true');
        // }
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [tracker, currentIndex])
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
          {selectedDay && threeDayLog.length !== 3 ? (
            <ThreeDayLogButton selectedDay={selectedDay} navigation={navigation} />
          ) : null}

          <Meals tracker={tracker} currentIndex={currentIndex} navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
