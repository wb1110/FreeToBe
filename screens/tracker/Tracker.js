import { Ionicons } from '@expo/vector-icons';
import { FAB, Text } from '@rneui/themed';
import moment from 'moment';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MealItem from './MealItem';

const mealList = [
  {
    mealName: 1,
    mealTime: 'time1',
    foodItems: [
      {
        foodName: 'Food1',
        foodCalories: 0,
        foodCarbs: 0,
        foodFat: 0,
        foodProtein: 0,
      },
    ],
  },
  {
    mealName: 2,
    mealTime: 'time2',
  },
  {
    mealName: 3,
    mealTime: 'time3',
  },
];

function Tracker({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [trackDate, setTrackDate] = useState('Today');
  const [date, setDate] = useState(new Date());
  const [dateData, setDateData] = useState();

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
            {mealList.map((item, index) => (
              <MealItem
                mealNumber={index}
                key={item.mealName}
                mealTime={item.mealTime}
                navigation={navigation}
              />
            ))}
          </View>

          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <FAB
              icon={<Ionicons name="add" size={24} color="black" />}
              size="medium"
              color="white"
              style={{ marginRight: '2%', marginBottom: '2%' }}
              onPress={() => navigation.navigate('AddMeal')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
