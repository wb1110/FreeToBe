import { Button, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

function Journal({ metabolicData, setMetabolicData, navigation }) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        margin: '2%',
      }}
    >
      <Text h4 h4Style={{ color: theme.colors.primary, alignSelf: 'flex-start' }}>
        Journal
      </Text>
      <View style={{ alignItems: 'center' }}>
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
  );
}

export default Journal;
