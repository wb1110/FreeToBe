/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
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
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/DidNotExercise.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Weight training"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/WeightTraining.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Aerobic / Dancing"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Aerobic_Dance.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Walk"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Walking.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Running"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Running.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Yoga"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Yoga.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Cycling"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Cycling.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Team sports"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/TeamSports.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Swimming"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Swimming.png')}
                    />
                  </View>
                }
                metabolicData={metabolicData}
                setMetabolicData={setMetabolicData}
                category={category}
              />
              <ComponentButton
                buttonTitle="Pilates"
                buttonIcon={
                  <View style={styles.iconContainer}>
                    <Image
                      style={styles.icon}
                      source={require('../../../assets/icons/PhysicalActivity/Pilates.png')}
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
