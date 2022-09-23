/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import Metabolic from './metabolic/Metabolic';
import Profile from './profile/Profile';
import Tracker from './tracker/Tracker';

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
          } else if (route.name === 'Metabolic') {
            iconName = 'fitness';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.secondary,
      })}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Tracker" component={Tracker} />
      <Tab.Screen name="Metabolic" component={Metabolic} />
    </Tab.Navigator>
  );
}
