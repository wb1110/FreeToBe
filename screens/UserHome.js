/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import { Image } from 'react-native';
import ftbnLogo from '../assets/icons/ftbnLogo.png';
import HomeStackScreen from './homeTab/HomeStackScreen';
import MetabolicJournal from './metabolicJournal/MetabolicJournal';
import SettingsStackScreen from './settings/SettingsStackScreen';
import TrackerStackScreen from './tracker/TrackerStackScreen';

function LogoTitle() {
  return <Image style={{ width: 100, height: 40 }} source={ftbnLogo} />;
}

export default function UserHome() {
  const { theme } = useTheme();

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTintColor: theme.colors.white,
        tabBarStyle: { backgroundColor: theme.colors.primary },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Tracker') {
            iconName = 'analytics';
          } else if (route.name === 'Profile') {
            iconName = 'clipboard';
          } else if (route.name === 'Metabolic Journal') {
            iconName = 'fitness';
          } else if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.secondary,
      })}
    >
      <Tab.Screen name="Tracker" component={TrackerStackScreen} />
      <Tab.Screen name="Metabolic Journal" component={MetabolicJournal} />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerTitle: () => <LogoTitle /> }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
}
