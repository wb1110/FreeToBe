import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/core';
import { FAB, Text } from '@rneui/themed';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useTrackerStore from '../../state/TrackerStore';
import MacroBar from './MacroBar';
import MealItem from './MealItem';

function Tracker({ navigation }) {
  const state = useTrackerStore();
  const { addDate, tracker } = state;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // trackDate = Date Header
  const [trackDate, setTrackDate] = useState('Today');
  // date = datePickerDate
  const [date, setDate] = useState(new Date());
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (newDate) => {
    const formatDate = moment(newDate).format('dddd, MMMM Do YYYY');
    const databaseDate = moment(newDate).format('L');
    setDate(newDate);
    setTrackDate(formatDate);
    setDateData(databaseDate);
    hideDatePicker();
  };

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
    // if (tracker[currentIndex]) {
    //   state.updateMacros(tracker, currentIndex);
    //   setProtein(tracker[currentIndex].protein);
    //   setCarbs(tracker[currentIndex].carbs);
    //   setFats(tracker[currentIndex].fats);
    //   setCalories(tracker[currentIndex].calories);
    // }

    const onLoadDate = moment(date).format('L');
    setDateData(onLoadDate);
    const savedDate = tracker[indexExists(tracker, onLoadDate)];
    if (!savedDate) {
      addDate(onLoadDate);
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
      }, [tracker])
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text h4 onPress={showDatePicker}>{`${trackDate}`}</Text>
                <Ionicons
                  name="chevron-down-circle"
                  size={24}
                  color="white"
                  onPress={showDatePicker}
                />
              </View>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                date={date}
                display="inline"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <MacroBar protein={protein} fats={fats} carbs={carbs} calories={calories} />
          </View>
          <View style={{ flex: 5, margin: '2%', width: '100%' }}>
            {tracker[currentIndex]
              ? tracker[currentIndex].meals.map((item, index) => (
                  <MealItem
                    mealNumber={index + 1}
                    mealName={item.mealName}
                    key={item.mealName}
                    mealTime={item.mealTime}
                    foodItems={item.foodItems}
                    navigation={navigation}
                    dayIndex={currentIndex}
                  />
                ))
              : null}
          </View>

          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <FAB
              icon={<Ionicons name="add" size={24} color="black" />}
              size="medium"
              color="white"
              style={{ marginRight: '2%', marginBottom: '2%' }}
              onPress={() => navigation.navigate('AddMeal', { dateToAddTo: dateData })}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
