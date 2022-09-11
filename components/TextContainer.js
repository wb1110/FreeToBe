import { View } from 'react-native';
import { useTheme } from '@rneui/themed';

function TextContainer(props) {
  const { children } = props;
  const { theme } = useTheme();
  return (
    <View
      style={{
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: '2%', 
        padding: '6%', 
        backgroundColor: theme.colors.secondary,
        borderRadius: '25%',
        shadowOffset: {
          height: 10  
        },
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
       }}
    >
      {children}
    </View>
  );
}

export default TextContainer;
