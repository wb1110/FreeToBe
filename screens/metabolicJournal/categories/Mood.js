/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { ScrollView, View, StyleSheet } from 'react-native';
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
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Calm.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Happy"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Happy.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Energetic"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Energetic.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Mood Swings"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/MoodSwings.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Sad"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Sad.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Irritated"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Irritated.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Anxious"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Anxious.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Depressed"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Depressed.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Guilty"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Calm.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Apathetic"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Apathetic.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Confused"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Confused.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
              />
              <ComponentButton
                buttonTitle="Self-critical"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/MoodIcons/Self-Critical.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category="mood"
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
