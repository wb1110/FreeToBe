import { useFocusEffect } from '@react-navigation/core';
import { useCallback, useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button, useTheme } from '@rneui/themed';
import useTrackerStore from '../../state/TrackerStore';
import addNewDate from '../../functions/AddNewDate';
import Calendar from './Calendar';
import MacroBar from './MacroBar';
import Meals from './Meals';
import { getTracker, getThreeDayLog } from '../../functions/Gets';
import useThreeDayLogStore from '../../state/ThreeDayLogStore';

function Tracker({ navigation }) {
  const state = useTrackerStore();
  const { addDate, tracker } = state;

  const threeDayState = useThreeDayLogStore();
  const { addDay } = threeDayState;

  const { theme } = useTheme();

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

  useEffect(() => {
    getTracker(state);
    getThreeDayLog();
    addNewDate(date, setDateData, indexExists, tracker, addDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() =>
      // Do something when the screen is focused
      {
        addNewDate(date, setDateData, indexExists, tracker, addDate);
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
          <View style={{ alignItems: 'center', marginTop: '8%' }}>
            <Button
              titleStyle={{
                color: theme.colors.primary,
              }}
              containerStyle={{ width: '90%' }}
              color={theme.colors.white}
              onPress={() => { addDay(tracker[currentIndex]); }}
              title="Three Day Log: Submit Day 1"
              size="sm"
            />
          </View>

          <Meals tracker={tracker} currentIndex={currentIndex} navigation={navigation} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
