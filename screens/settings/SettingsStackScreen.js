import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import MacroDistribution from './MacroDistribution';
import Settings from './Settings';
// Before rendering any navigation stack
enableScreens();

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsHome" component={Settings} />
      <SettingsStack.Screen name="MacroDistribution" component={MacroDistribution} />
    </SettingsStack.Navigator>
  );
}
