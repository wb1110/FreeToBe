import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { ListItem, Text, useTheme } from '@rneui/themed'

const list = [
  {
    foodItem: 'Include brand names',
    quantity: 'g, mL, tablespoons[T], teaspoons[t], cups[c], etc',
    notes: 'Include ingredients & amounts of homemade items'
  },
  {
    foodItem: 'Include brand names',
    quantity: 'g, mL, tablespoons[T], teaspoons[t], cups[c], etc',
    notes: 'Include ingredients & amounts of homemade items'
  },
  {
    foodItem: 'Include brand names',
    quantity: 'g, mL, tablespoons[T], teaspoons[t], cups[c], etc',
    notes: 'Include ingredients & amounts of homemade items'
  },
  {
    foodItem: 'Include brand names',
    quantity: 'g, mL, tablespoons[T], teaspoons[t], cups[c], etc',
    notes: 'Include ingredients & amounts of homemade items'
  },
  {
    foodItem: 'Include brand names',
    quantity: 'g, mL, tablespoons[T], teaspoons[t], cups[c], etc',
    notes: 'Include ingredients & amounts of homemade items'
  },
]

export default function Day1() {
  const { theme } = useTheme();
  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
    <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.secondary}}>
      <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-around'  }}>
        <ListItem containerStyle={{ backgroundColor: theme.colors.secondary}}><Text>{item.foodItem}</Text></ListItem>
        <ListItem containerStyle={{ backgroundColor: theme.colors.secondary}}><Text>{item.quantity}</Text></ListItem>
        <ListItem containerStyle={{ backgroundColor: theme.colors.secondary}}><Text>{item.notes}</Text></ListItem>
      </ListItem.Content>
    </ListItem>
  )
  return (
    <View style={{ margin: 10 }}>
      <Text h2 style={{ textAlign: 'center' }}>Day 1</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Text>Food Item</Text>
        <Text>Quantity</Text>
        <Text>Notes</Text>
      </View>
      <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={renderItem}
      />
    </View>
  )
}