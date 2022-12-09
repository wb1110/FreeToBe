import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

function PinnedComponent() {
  return (
    <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
      <Text>Component Name</Text>
      <View
        style={{
          backgroundColor: 'black',
          width: 75,
          height: 75,
          borderRadius: 75 / 2,
        }}
      >
        <Text
          style={{
            position: 'absolute',
            left: 20,
            top: 25,
          }}
        >
          Icon
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PinnedComponent;
