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
    <View style={{ justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
      <Text>Tracker</Text>

      <FoodScanner />
      <View style={{ width: '100%' }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={{ backgroundColor: 'white' }}
          containerStyle={{ borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
        />
      </View>
    </View>
  );
}

export default Tracker;
