/* eslint-disable global-require */
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/base';
import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Hair({ metabolicData, setMetabolicData }) {
  const category = 'hair';
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
          <Text h3>Hair</Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <ComponentButton
                buttonTitle="Vibrant"
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
                buttonTitle="Dull"
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
                buttonTitle="Oily"
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
                buttonTitle="Dry"
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
                buttonTitle="Brittle"
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
                buttonTitle="Losing hair"
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
                buttonTitle="Growing hair"
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
        </View>
      </ScrollView>
    </View>
  );
}
