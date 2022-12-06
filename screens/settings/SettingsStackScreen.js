import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MacroDistribution from './MacroDistribution';
import Settings from './Settings';

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsHome" component={Settings} />
      <SettingsStack.Screen name="MacroDistribution" component={MacroDistribution} />
    </SettingsStack.Navigator>
  );
}
