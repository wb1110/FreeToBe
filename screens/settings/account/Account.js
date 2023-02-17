import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import Email from './Email';
import Password from './Password';

export default function Account({ navigation }) {
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
        <Email />
        <Password />
      </View>
    </View>
  );
}
