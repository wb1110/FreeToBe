/* eslint-disable global-require */
import { Button, Input, Text } from '@rneui/themed';
import { View } from 'react-native';

export default function Temperature({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Temperature</Text>
        <View style={{ flex: 1 }}>
          <Input
            label="Enter waking temperature here"
            onChangeText={(value) =>
              setMetabolicData({
                ...metabolicData,
                temperature: {
                  wakingTemp: value,
                },
              })
            }
          />
          <View style={{ margin: '2%' }}>
            <Text h4>Click below to add temperatures before and after a meal</Text>
            <Button title="Add a new meal" />
          </View>
        </View>
      </View>
    </View>
  );
}
