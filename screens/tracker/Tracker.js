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
        <View style={{ justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
          <Text>Tracker</Text>
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
