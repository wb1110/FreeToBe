import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import OpenJournal from './categories/OpenJournal';
import MetabolicJournal from './MetabolicJournal';
import PeriodCalendar from './PeriodCalendar';
// Before rendering any navigation stack
enableScreens();

const MetabolicJournalStack = createNativeStackNavigator();

export default function MetabolicJournalStackScreen() {
  return (
    <MetabolicJournalStack.Navigator screenOptions={{ headerShown: false }}>
      <MetabolicJournalStack.Screen name="MJHome" component={MetabolicJournal} />
      <MetabolicJournalStack.Screen name="MJCalendar" component={PeriodCalendar} />
      <MetabolicJournalStack.Screen name="OpenJournal" component={OpenJournal} />
    </MetabolicJournalStack.Navigator>
  );
}
