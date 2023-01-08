/* eslint-disable global-require */
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Mood({ metabolicData, setMetabolicData }) {
  const [selected, setSelected] = useState(false);
  const handleAddItem = (value) => {
    // setMetabolicData({
    //   ...metabolicData,
    //   mood: [...metabolicData.mood, value],
    // });
    setSelected(!selected);
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
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Calm.png')}
                  />
                }
                onPress={() => handleAddItem('Calm')}
                selected={selected}
              />
              <ComponentButton
                buttonTitle="Happy"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Happy.png')}
                  />
                }
                onPress={() => handleAddItem('Happy')}
              />
              <ComponentButton
                buttonTitle="Energetic"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                onPress={() => handleAddItem('Energetic')}
              />
              <ComponentButton
                buttonTitle="Mood Swings"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/MoodSwings.png')}
                  />
                }
                onPress={() => handleAddItem('Mood Swings')}
              />
              <ComponentButton
                buttonTitle="Sad"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Sad.png')}
                  />
                }
                onPress={() => handleAddItem('Sad')}
              />
              <ComponentButton
                buttonTitle="Irritated"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Irritated.png')}
                  />
                }
                onPress={() => handleAddItem('Irritated')}
              />
              <ComponentButton
                buttonTitle="Anxious"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Anxious.png')}
                  />
                }
                onPress={() => handleAddItem('Anxious')}
              />
              <ComponentButton
                buttonTitle="Depressed"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Depressed.png')}
                  />
                }
                onPress={() => handleAddItem('Depressed')}
              />
              <ComponentButton
                buttonTitle="Guilty"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Guilty.png')}
                  />
                }
                onPress={() => handleAddItem('Guilty')}
              />
              <ComponentButton
                buttonTitle="Apathetic"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Apathetic.png')}
                  />
                }
                onPress={() => handleAddItem('Apathetic')}
              />
              <ComponentButton
                buttonTitle="Confused"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Confused.png')}
                  />
                }
                onPress={() => handleAddItem('Confused')}
              />
              <ComponentButton
                buttonTitle="Self-critical"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/SelfCritical.png')}
                  />
                }
                onPress={() => handleAddItem('Self-critical')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
