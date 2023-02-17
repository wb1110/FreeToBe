import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import SettingsContainer from '../SettingsContainer';
import Age from './Age';
import BMI from './BMI';
import Height from './Height';
import Weight from './Weight';

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
        <Weight />
        <Height />
        <BMI />
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Body Fat</Text>
        </SettingsContainer>
      </View>
    </View>
  );
}
