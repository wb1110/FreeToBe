/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Skin({ metabolicData, setMetabolicData }) {
  const category = 'skin';
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
          <Text h3>Skin</Text>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '2%',
              }}
            >
              <ComponentButton
                buttonTitle="Healthy glow"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/SkinIcons/HealthyGlow.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Irritated"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/SkinIcons/Irritated.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Red spots"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/SkinIcons/RedSpots.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Itchy"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/SkinIcons/Itchy.png')}
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
                      source={require('../../../assets/icons/SkinIcons/Dry.png')}
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
                      source={require('../../../assets/icons/SkinIcons/Oily.png')}
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
    width: 60,
    height: 60,
    margin: -5,
  },
});
