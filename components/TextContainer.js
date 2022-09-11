import { View } from 'react-native';
import { useTheme } from '@rneui/themed';

function TextContainer(props) {
  const { flexGrow, children } = props;
  const { theme } = useTheme();
  return (
    <View 
      contentContainerStyle={{flexGrow}} 
      style={{
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: '2%', 
        padding: '6%', 
        backgroundColor: theme.colors.secondary,
        borderRadius: '25%',
       }}
    >
      {children}
    </View>
  );
}

export default TextContainer;
