/* eslint-disable global-require */
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/base';
import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Period({ metabolicData, setMetabolicData }) {
  const category = 'period';
  const subCategory1 = 'symptoms';
  const subCategory2 = 'mentrualFlow';
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
          <Text h3>Period</Text>
          <View style={{ flex: 1 }}>
            <Text>Calendar Icon Here</Text>
            <Text h4>Symptoms</Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <ComponentButton
                buttonTitle="Everything is fine"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Calm.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Cramps"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Happy.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Bloating"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="High pain"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Tender breasts"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Head ache"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Back ache"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Nausea"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Fatigue"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
              <ComponentButton
                buttonTitle="Cravings"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory1}
              />
            </View>
            <Text h4>Menstrual Flow</Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <ComponentButton
                buttonTitle="Light"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Calm.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory2}
              />
              <ComponentButton
                buttonTitle="Medium"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Happy.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory2}
              />
              <ComponentButton
                buttonTitle="Heavy"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
                subCategory={subCategory2}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
