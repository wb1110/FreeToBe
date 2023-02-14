import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import SettingsContainer from './SettingsContainer';

export default function Targets({ navigation }) {
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
          <Text h4>Energy Settings</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Macronutrient Settings</Text>
        </SettingsContainer>
        <SettingsContainer onPress={() => console.log('test')}>
          <Text h4>Nutrient Targets</Text>
        </SettingsContainer>
      </View>
    </View>
  );
}
