import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import SettingsContainer from './SettingsContainer';

export default function Feedback({ navigation }) {
  const { theme } = useTheme();

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
