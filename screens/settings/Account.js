import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import useAuthStore from '../../state/AuthStore';
import useSettingsStore from '../../state/SettingsStore';
import SettingsContainer from './SettingsContainer';
import WillSettings from './WillSettings';

export default function Account({ navigation }) {
  const { theme } = useTheme();
  const settingsState = useSettingsStore();
  const { signout } = useAuthStore();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}
    >
      <LArrowButton onPress={() => navigation.goBack()} />
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          backgroundColor: theme.colors.primary,
          alignItems: 'flex-end',
        }}
      >
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Name</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Email</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Change Password</Text>
        </SettingsContainer>
      </View>
    </View>
  );
}
