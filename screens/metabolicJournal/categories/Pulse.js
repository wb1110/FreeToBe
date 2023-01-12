/* eslint-disable global-require */
import { Input, Text } from '@rneui/themed';
import { View } from 'react-native';

export default function Pulse({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Pulse</Text>
        <View style={{ flex: 1 }}>
          <Input
            label="Enter morning pulse here"
            onChangeText={(value) =>
              setMetabolicData({
                ...metabolicData,
                pulse: value,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}
