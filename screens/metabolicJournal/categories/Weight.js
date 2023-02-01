/* eslint-disable global-require */
import { Input, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';

export default function Weight({ metabolicData, setMetabolicData }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Weight</Text>
        <View style={{ flex: 1 }}>
          <Input
            label="Enter Weight"
            onChangeText={(value) =>
              setMetabolicData({
                ...metabolicData,
                weight: value,
              })
            }
          />
        </View>
      </View>
    </View>
  );
}
