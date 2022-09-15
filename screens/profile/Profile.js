import { View, Text } from 'react-native'
import React from 'react'
import StandardButton from '../../components/Buttons/StandardButton'
import Container from '../../components/Container'
import { createStackNavigator } from '@react-navigation/stack';
import ThreeDay from './ThreeDay/ThreeDay';
import Day1 from './ThreeDay/Day1';

const Stack = createStackNavigator();

export const Profile = ({ navigation }) => {
return(
  <Container>
  <StandardButton title='Assessment Results' />
  <StandardButton title='Three-Day Dietary Record' onPress={() => navigation.navigate('ThreeDay')} />
</Container>
)
}

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ThreeDay" component={ThreeDay} />
    <Stack.Screen name="Day1" component={Day1} />
  </Stack.Navigator>
  )
}

export default ProfileNavigator