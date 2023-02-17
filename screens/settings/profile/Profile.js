import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import SettingsContainer from '../SettingsContainer';
import Age from './Age';
import Height from './Height';

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
        <Age />
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Weight</Text>
        </SettingsContainer>
        <Height />
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
