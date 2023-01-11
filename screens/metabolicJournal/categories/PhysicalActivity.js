/* eslint-disable global-require */
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/base';
import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function PhysicalActivity({ metabolicData, setMetabolicData }) {
  const category = 'physicalActivity';
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
          <Text h3>Physical Activity</Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <ComponentButton
                buttonTitle="Did not exercise"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Calm.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Weight training"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Happy.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Aerobic / Dancing"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Walk"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Running"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Yoga"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
            </View>
            <ComponentButton
              buttonTitle="Cycling"
              buttonIcon={
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/icons/Energetic.png')}
                />
              }
              metabolicData={metabolicData}
              setMetabolicData={setMetabolicData}
              category={category}
            />
            <ComponentButton
              buttonTitle="Team sports"
              buttonIcon={
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/icons/Energetic.png')}
                />
              }
              metabolicData={metabolicData}
              setMetabolicData={setMetabolicData}
              category={category}
            />
            <ComponentButton
              buttonTitle="Swimming"
              buttonIcon={
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/icons/Energetic.png')}
                />
              }
              metabolicData={metabolicData}
              setMetabolicData={setMetabolicData}
              category={category}
            />
            <ComponentButton
              buttonTitle="Pilates"
              buttonIcon={
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../../../assets/icons/Energetic.png')}
                />
              }
              metabolicData={metabolicData}
              setMetabolicData={setMetabolicData}
              category={category}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
