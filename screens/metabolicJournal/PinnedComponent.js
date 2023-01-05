import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

function PinnedComponent({ one, two, three }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
        <Text>{one}</Text>
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
      <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
        <Text>{two}</Text>
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
      <TouchableOpacity style={{ alignItems: 'center', flex: 1 }}>
        <Text>{three}</Text>
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
    </View>
  );
}

export default PinnedComponent;
