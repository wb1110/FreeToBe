import { Button, Text } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

function Journal({ metabolicData, setMetabolicData, navigation }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Journal</Text>
        <View style={{ flex: 1 }}>
          <Button
            title="Open Journal"
            onPress={() => {
              navigation.navigate('OpenJournal', {
                metabolicData,
                setMetabolicData,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default Journal;
