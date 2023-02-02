/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { ScrollView, StyleSheet, View } from 'react-native';
import SymptomsButton from './SymptomsButton';

export default function Symptoms({ metabolicData, setMetabolicData }) {
  const category = 'period';
  return (
    <ScrollView
      directionalLockEnabled
      contentContainerStyle={{ flexGrow: 1, paddingRight: 200, flex: 1 }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <SymptomsButton
          buttonTitle="Everything is fine"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/EverythingisFine.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Cramps"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Cramps.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Bloating"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Bloating.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="High pain"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/HighPain.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Tender breasts"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/TenderBreasts.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Head ache"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Headache.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Back ache"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Backache.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Nausea"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Nausea.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Fatigue"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Fatigue.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
        <SymptomsButton
          buttonTitle="Cravings"
          buttonIcon={
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../../../assets/icons/period/Cravings.png')}
              />
            </View>
          }
          metabolicData={metabolicData}
          setMetabolicData={setMetabolicData}
          category={category}
        />
      </View>
    </ScrollView>
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
    width: 80,
    height: 80,
    margin: -5,
  },
});
