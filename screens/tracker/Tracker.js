import { Ionicons } from '@expo/vector-icons';
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

  if (tracker[currentIndex]) {
    protein = tracker[currentIndex].protein;
  }

  useEffect(() => {
    const onLoadDate = moment(date).format('L');
    setDateData(onLoadDate);
    const savedDate = tracker[indexExists(tracker, onLoadDate)];
    if (!savedDate) {
      addDate(onLoadDate);
    }
    if (tracker[currentIndex]) {
      state.updateProtein(tracker, currentIndex);
    }
  }, [tracker]);

  // const getMeals = async () => {
  //   let meals;
  //   try {
  //     const tracker = await AsyncStorage.getItem('tracker');
  //     meals = JSON.parse(tracker);
  //     state.setMeals(meals);
  //   } catch (e) {
  //     return e;
  //   }
  //   return meals;
  // };

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
              </View>
              <View>
                <Text>Carbs</Text>
              </View>
              <View>
                <Text>Calories</Text>
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
