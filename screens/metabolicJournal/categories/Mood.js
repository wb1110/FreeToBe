import { Feather } from '@expo/vector-icons';
import { Button, Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Mood({ metabolicData, setMetabolicData }) {
  const handleAddItem = (value) => {
    setMetabolicData({
      ...metabolicData,
      mood: [...metabolicData.mood, value],
    });
  };

  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '2%',
      }}
    >
      <ScrollView
        directionalLockEnabled
        contentContainerStyle={{ flexGrow: 1, paddingRight: 200, flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <Text h3>Mood</Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <ComponentButton
                buttonTitle="Calm"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Calm')}
              />
              <ComponentButton
                buttonTitle="Happy"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Happy')}
              />
              <ComponentButton
                buttonTitle="Energetic"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Energetic')}
              />
              <ComponentButton
                buttonTitle="Mood Swings"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Mood Swings')}
              />
              <ComponentButton
                buttonTitle="Sad"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Sad')}
              />
              <ComponentButton
                buttonTitle="Irritated"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Irritated')}
              />
              <ComponentButton
                buttonTitle="Anxious"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Anxious')}
              />
              <ComponentButton
                buttonTitle="Depressed"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Depressed')}
              />
              <ComponentButton
                buttonTitle="Guilty"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Guilty')}
              />
              <ComponentButton
                buttonTitle="Apathetic"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Apathetic')}
              />
              <ComponentButton
                buttonTitle="Confused"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Confused')}
              />
              <ComponentButton
                buttonTitle="Self-critical"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
                onPress={() => handleAddItem('Self-critical')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
