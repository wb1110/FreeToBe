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
      <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
        <Text h4 h4Style={{ color: 'black', alignSelf: 'flex-start' }}>
          Weight
        </Text>
        <View style={{ flex: 1 }}>
          <Input
            label="Enter Weight"
            value={`${metabolicData.weight}`}
            onChangeText={(value) =>
              setMetabolicData({
                ...metabolicData,
                weight: value,
              })
            }
            style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, color: 'black' }}
          />
          <Text style={{ color: 'black' }}>Enter Weight (lbs)</Text>
        </View>
      </View>
    </View>
  );
}
