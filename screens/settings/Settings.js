import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import useAuthStore from '../../state/AuthStore';
import useSettingsStore from '../../state/SettingsStore';
import SettingsContainer from './SettingsContainer';
import WillSettings from './WillSettings';

export default function Settings({ navigation }) {
  const { theme } = useTheme();
  const { signout } = useAuthStore();

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'flex-end',
      }}
    >
      <SettingsContainer onPress={() => navigation.navigate('Account')}>
        <Text h4>Account</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => console.log('test')}>
        <Text h4>Profile</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => console.log('test')}>
        <Text h4>Targets</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => console.log('test')}>
        <Text h4>Display</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => console.log('test')}>
        <Text h4>Send feedback & help us improve</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('HeightWeightAge')}>
        <Text h4>Retake Assessment</Text>
      </SettingsContainer>
      <SettingsContainer onPress={() => navigation.navigate('MacroDistribution')}>
        <Text h4>Select Macronutrient Distribution</Text>
      </SettingsContainer>
      <SettingsContainer onPress={signout}>
        <Text h4>Log Out</Text>
      </SettingsContainer>
      <WillSettings />
    </View>
  );
}
