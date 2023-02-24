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
        <Text h4 h4Style={{ color: theme.colors.primary, alignSelf: 'flex-start' }}>
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
            style={{
              borderColor: theme.colors.primary,
              borderWidth: 1,
              borderRadius: 20,
              color: theme.colors.primary,
            }}
          />
          <Text style={{ color: theme.colors.primary }}>Enter Weight (lbs)</Text>
        </View>
      </View>
    </View>
  );
}
