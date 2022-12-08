import { Text } from '@rneui/themed';
import { View } from 'react-native';
import ComponentButton from './ComponentButton';

function MetabolicComponent({ componentName, componentButtons }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        backgroundColor: 'black',
        flex: 1,
        marginBottom: '2%',
        paddingBottom: '2%',
      }}
    >
      <Text>{componentName}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        {/* mapping of componentButtons */}
        {componentButtons.map((item) => (
          <ComponentButton buttonTitle={item.buttonTitle} buttonIcon={item.buttonIcon} />
        ))}
      </View>
    </View>
  );
}

export default MetabolicComponent;
