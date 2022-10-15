import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB, Text } from '@rneui/themed';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import useTrackerStore from '../../state/TrackerStore';
import MealItem from './MealItem';

function Tracker({ navigation }) {
  const state = useTrackerStore();
  const { addDate, tracker } = state;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [trackDate, setTrackDate] = useState('Today');
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState();
  let protein = 0;
  let carbs = 0;
  let fats = 0;
  let calories = 0;

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
      state.updateTracker(parsedResult);
    } catch (e) {
      return e;
    }
    return parsedResult;
  };

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

  if (tracker[currentIndex]) {
    protein = tracker[currentIndex].protein;
    carbs = tracker[currentIndex].carbs;
    fats = tracker[currentIndex].fats;
    calories = tracker[currentIndex].calories;
  }
  console.log(tracker);
  useEffect(() => {
    getTracker();
    const onLoadDate = moment(date).format('L');
    setDateData(onLoadDate);
    const savedDate = tracker[indexExists(tracker, onLoadDate)];
    if (!savedDate) {
      addDate(onLoadDate);
    }
    if (tracker[currentIndex]) {
      state.updateMacros(tracker, currentIndex);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flex: 1,
                width: '100%',
                margin: '2%',
              }}
            >
              <View>
                <Text>Protein</Text>
                <Text>{`${protein}g`}</Text>
                {/* {tracker.date
                  ? tracker.map((dayObj) =>
                      dayObj.meals.map((mealObj) =>
                        mealObj.foodItems.map((foodObj) =>
                          setProtein(protein + foodObj.foodProtein)
                        )
                      )
                    )
                  : null} */}
              </View>
              <View>
                <Text>Fat</Text>
                <Text>{`${fats}g`}</Text>
              </View>
              <View>
                <Text>Carbs</Text>
                <Text>{`${carbs}g`}</Text>
              </View>
              <View>
                <Text>Calories</Text>
                <Text>{`${calories}`}</Text>
              </View>
            </View>
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
