import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import Account from './account/Account';
import Feedback from './feedback/Feedback';
import Profile from './profile/Profile';
import Settings from './Settings';
import Energy from './targets/Energy';
import MacroDistribution from './targets/MacroDistribution';
import Targets from './targets/Targets';
// Before rendering any navigation stack
enableScreens();

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsHome" component={Settings} />
      <SettingsStack.Screen name="MacroDistribution" component={MacroDistribution} />
      <SettingsStack.Screen name="Account" component={Account} />
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Targets" component={Targets} />
      <SettingsStack.Screen name="Energy" component={Energy} />
      <SettingsStack.Screen name="Feedback" component={Feedback} />
    </SettingsStack.Navigator>
  );
}
