import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import Age from './Age';
import BMI from './BMI';
import BodyFat from './BodyFat';
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
        <BodyFat />
      </View>
    </View>
  );
}
