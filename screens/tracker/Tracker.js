import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from '@rneui/themed';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import StandardButton from '../../components/Buttons/StandardButton';
import useTrackerStore from '../../state/TrackerStore';
import AddMeal from './AddMeal';
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

function Tracker() {
  const [modalOpen, setModalOpen] = useState(false);
  const state = useTrackerStore();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [trackDate, setTrackDate] = useState('Today');
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (newDate) => {
    const formatDate = moment(newDate).format('dddd, MMMM Do YYYY');
    setDate(newDate);
    setTrackDate(formatDate);
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
            <View>
              <StandardButton title={`${trackDate}`} onPress={showDatePicker} />
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
              <MealItem mealNumber={index} key={item.mealName} mealTime={item.mealTime} />
            ))}
            {/* <MealItem /> */}
          </View>
          <AddMeal modalOpen={modalOpen} setModalOpen={setModalOpen} mealList={mealList} />

          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <FAB
              icon={<Ionicons name="add" size={24} color="black" />}
              size="medium"
              color="white"
              style={{ marginRight: '2%', marginBottom: '2%' }}
              onPress={() => setModalOpen(!modalOpen)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
