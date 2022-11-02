import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Button, SearchBar, Text } from '@rneui/themed';
import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AddManually from './AddManually';
import FoodScanner from '../foodScanner/FoodScanner';

export default function AddFoodItem({ route, navigation }) {
  const { dayIndex, mealName } = route.params;
  const [search, setSearch] = useState('');
  const [manual, setManual] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const getData = () => {
    axios
      .get('http://reqres.in/api/users/2')
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={{ alignItems: 'center' }}>
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
          <Button onPress={() => getData()}>Test</Button>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: '2%',
                alignItems: 'center',
                margin: '2%',
                width: 125,
              }}
              onPress={() => setModalOpen(true)}
            >
              <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
              <Text style={{ color: 'black' }}>Scan Barcode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: '2%',
                alignItems: 'center',
                margin: '2%',
                width: 125,
              }}
              onPress={() => setManual(!manual)}
            >
              <MaterialIcons name="post-add" size={24} color="black" />
              <Text style={{ color: 'black' }}>Manual Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        {manual ? (
          <AddManually mealName={mealName} dayIndex={dayIndex} navigation={navigation} />
        ) : null}
        <FoodScanner setSearch={setSearch} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </View>
    </TouchableWithoutFeedback>
  );
}
