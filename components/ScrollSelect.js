import { View, FlatList, TouchableOpacity, Overlay } from 'react-native'
import { Text, StandardButton } from "@rneui/themed";
import { useState } from 'react'

const heightFt = [
  {height: "4ft"}, 
  {height: "5ft"}, 
  {height: "6ft"},
  {height: "7ft"}, 
]

const heightIn = [
  {height: "1in"}, 
  {height: "2in"}, 
  {height: "3in"},
  {height: "4in"}, 
  {height: "5in"}, 
  {height: "6in"}, 
  {height: "7in"},
  {height: "8in"}, 
  {height: "9in"}, 
  {height: "10in"}, 
  {height: "11in"},
]

function Item({ item, onPress }) {
  return <TouchableOpacity onPress={onPress}>
    <Text h1 h1Style={{ color: 'white' }}>{item}</Text>
  </TouchableOpacity>
}

function ScrollSelect() {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState('');

  const renderItem = ({ item }) => (
    <Item item={item.height} />
  );

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <StandardButton title={`Height ${height}`} onPress={toggleOverlay}/>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{ backgroundColor: 'transparent' }}>
        <View style={{ height: '50%', marginTop: '10%', flexDirection: 'row', alignItems: 'center' }}>
          <FlatList keyExtractor={item => item.height} data={heightFt} renderItem={renderItem} />
          <FlatList keyExtractor={item => item.height} data={heightIn} renderItem={renderItem} />
        </View>
        <StandardButton title='Submit' onPress={toggleOverlay}/>
      </Overlay>
    </View>
  )
}

export default ScrollSelect