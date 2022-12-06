import { Text, useTheme } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

export default function SettingsContainer(props) {
  const { children, onPress } = props;
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={{
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: '1%',
        borderBottomColor: theme.colors.secondary,
      }}
      onPress={onPress}
    >
      {children}
      <Text style={{ margin: '2%' }}>{'>'}</Text>
    </TouchableOpacity>
  );
}
