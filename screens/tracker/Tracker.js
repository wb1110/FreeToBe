import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SearchBar, FAB } from '@rneui/themed';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FoodScanner from '../foodScanner/FoodScanner';
import MealItem from './MealItem';

const mealList = [
  {
    mealName: 'food1',
    mealTime: 'time1',
  },
  {
    mealName: 'food2',
    mealTime: 'time2',
  },
  {
    mealName: 'food3',
    mealTime: 'time3',
  },
];

function Tracker() {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };
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
            {mealList.map((item) => (
              <MealItem mealName={item.mealName} mealTime={item.mealTime} />
            ))}
            {/* <MealItem /> */}
          </View>
          <FoodScanner setSearch={setSearch} modalOpen={modalOpen} setModalOpen={setModalOpen} />

          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <FAB
              icon={<MaterialCommunityIcons name="barcode-scan" size={24} color="black" />}
              size="medium"
              color="white"
              style={{ marginRight: '2%' }}
              onPress={() => setModalOpen(!modalOpen)}
            />
            <SearchBar
              placeholder="Type Here..."
              onChangeText={updateSearch}
              value={search}
              inputContainerStyle={{ backgroundColor: 'white' }}
              containerStyle={{
                borderBottomColor: 'transparent',
                borderTopColor: 'transparent',
                width: '100%',
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Tracker;
