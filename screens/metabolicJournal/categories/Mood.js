import { Feather } from '@expo/vector-icons';
import { Button, Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Mood({ metabolicData, setMetabolicData }) {
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
                onPress={() => metabolicData.mood.push('Calm')}
              />
              <ComponentButton
                buttonTitle="Happy"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Energetic"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Mood Swings"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Sad"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Irritated"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Anxious"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Depressed"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Guilty"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Apathetic"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Confused"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
              <ComponentButton
                buttonTitle="Self-critical"
                buttonIcon={<Feather name="sunrise" size={24} color="black" />}
                buttonColor="yellow"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
