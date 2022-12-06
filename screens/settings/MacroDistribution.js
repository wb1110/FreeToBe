import { useTheme } from '@rneui/themed';
import { View, Text } from 'react-native';

export default function MacroDistribution() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'flex-end',
      }}
    >
      <Text>MacroDistribution</Text>
    </View>
  );
}
