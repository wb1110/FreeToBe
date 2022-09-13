import { View } from 'react-native';
import { useTheme, Text } from '@rneui/themed';

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
        backgroundColor: theme.colors.primary,
        borderRadius: '25%',
        shadowOffset: {
          height: 10  
        },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
       }}
    >
      <Text h4 h4Style={{ color: theme.colors.white }}>
      {children}
      </Text>
    </View>
  );
}

export default TextContainer;
