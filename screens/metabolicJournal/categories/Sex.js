/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Sex({ metabolicData, setMetabolicData }) {
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
          <Text h3>Sex</Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <ComponentButton
                buttonTitle="Did not have sex"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Calm.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
              <ComponentButton
                buttonTitle="Protected Sex"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Happy.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
              <ComponentButton
                buttonTitle="Unprotected Sex"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Energetic.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
              <ComponentButton
                buttonTitle="Masturbation"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/MoodSwings.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
              <ComponentButton
                buttonTitle="High Sex Drive"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Sad.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
              <ComponentButton
                buttonTitle="Low Sex Drive"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Irritated.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
              <ComponentButton
                buttonTitle="No Sex Drive"
                buttonIcon={
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../../../assets/icons/Anxious.png')}
                  />
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="sex"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
