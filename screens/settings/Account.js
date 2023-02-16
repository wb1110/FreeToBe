import { Text, useTheme } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import useAuthStore from '../../state/AuthStore';
import SettingsContainer from './SettingsContainer';

export default function Account({ navigation }) {
  const { theme } = useTheme();
  const { getEmail, id, token } = useAuthStore();
  const [email, setEmail] = useState('');

  useEffect(() => {
    getEmail(id, token, setEmail);
  }, [id]);

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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <Text h4>Email</Text>
            <Text h4>{email}</Text>
          </View>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Change Password</Text>
        </SettingsContainer>
      </View>
    </View>
  );
}
