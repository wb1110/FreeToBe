import { Ionicons } from '@expo/vector-icons';
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
import AddMeal from './AddMeal';
import MealItem from './MealItem';

const mealList = [
  {
    mealName: 1,
    mealTime: 'time1',
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
          <View style={{ flex: 1 }}>
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
          <AddMeal modalOpen={modalOpen} setModalOpen={setModalOpen} />

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
