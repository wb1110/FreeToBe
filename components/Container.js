import { useTheme } from '@rneui/themed';
import { View } from 'react-native';

function Container(props) {
  const { flexGrow, children, height } = props;
  const { theme } = useTheme();
  return (
    <View contentContainerStyle={{flexGrow}} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: '2%', width: '100%', height, backgroundColor: theme.colors.secondary}}>
      {children}
    </View>
  );
}

export default Container;
