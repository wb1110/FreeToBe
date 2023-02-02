/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Button, Image, Input, Overlay, Text } from '@rneui/themed';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputButton from '../InputButton';

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
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <InputButton
              buttonTitle="Enter morning pulse"
              buttonIcon={
                <View style={styles.iconContainer}>
                  <Image
                    style={styles.icon}
                    source={require('../../../assets/icons/MoodIcons/Calm.png')}
                  />
                </View>
              }
              onPress={toggleOverlay}
            />
          </View>
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

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    margin: -5,
  },
});
