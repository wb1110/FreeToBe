import { View, Text } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { useState } from 'react';
import FoodScanner from '../foodScanner/FoodScanner';

function Tracker() {
  const [search, setSearch] = useState('');

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };
  return (
    <View>
      <Text>Tracker</Text>
      <View style={{ position: 'absolute', width: '100%', top: 400 }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={{ backgroundColor: 'white' }}
          containerStyle={{ borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
        />
      </View>
      <FoodScanner />
    </View>
  );
}

export default Tracker;
