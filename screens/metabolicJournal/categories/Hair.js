/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
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
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/Vibrant.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Dull"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/Dull.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Oily"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/Oily.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Dry"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/Dry.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Brittle"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/Brittle.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Losing hair"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/LosingHair.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Growing hair"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/HairIcons/GrowingHair.png')}
                    />
                  </View>
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
