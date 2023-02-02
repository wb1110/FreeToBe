/* eslint-disable global-require */
import { Button, Input, Overlay, Text } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';

export default function Pulse({ metabolicData, setMetabolicData }) {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
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
          <Button
            title="Set Waking Temp"
            onPress={() => toggleOverlay('waking')}
            containerStyle={{ borderRadius: 20, width: 200 }}
          />
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Input
              label="Enter morning pulse here"
              onChangeText={(value) =>
                setMetabolicData({
                  ...metabolicData,
                  pulse: value,
                })
              }
              labelStyle={{ color: 'black' }}
              style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, color: 'black' }}
            />
          </Overlay>
        </View>
      </View>
    </View>
  );
}
