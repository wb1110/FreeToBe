import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { ListItem, Text, useTheme } from '@rneui/themed'

const list = [
  {
    foodItem: 'Food Test',
    entryTime: '12:34:56',
  },
  {
    foodItem: 'Food Test',
    entryTime: '12:34:56',
  },
  {
    foodItem: 'Food Test',
    entryTime: '12:34:56',
  },
  {
    foodItem: 'Food Test',
    entryTime: '12:34:56',
  },
  {
    foodItem: 'Food Test',
    entryTime: '12:34:56',
  },
]

export default function Day3() {
  const { theme } = useTheme();
  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
    <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.secondary}}>
      <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-around'  }}>
        <ListItem containerStyle={{ backgroundColor: theme.colors.secondary}}><Text>{item.foodItem}</Text></ListItem>
        <ListItem containerStyle={{ backgroundColor: theme.colors.secondary}}><Text>{item.entryTime}</Text></ListItem>
      </ListItem.Content>
    </ListItem>
  )
  return (
    <View style={{ margin: 10 }}>
      <Text h2 style={{ textAlign: 'center' }}>Day 3</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Text>Food Item</Text>
        <Text>Time Recorded</Text>
      </View>
      <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={renderItem}
      />
    </View>
  )
}