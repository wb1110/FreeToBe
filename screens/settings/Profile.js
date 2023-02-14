import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import SettingsContainer from './SettingsContainer';

export default function Profile({ navigation }) {
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
          <Text h4>Age</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Sex</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Weight</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Height</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Body Mass Index (BMI)</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Body Fat</Text>
        </SettingsContainer>
      </View>
    </View>
  );
}
