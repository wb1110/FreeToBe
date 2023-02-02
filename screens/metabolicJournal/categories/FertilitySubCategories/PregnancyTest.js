/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import PregnancyTestButtons from './PregnancyTestButtons';

export default function PregnancyTest({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: '2%',
        marginBottom: '2%',
      }}
    >
      <PregnancyTestButtons
        buttonTitle="Didn't take a test"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/PregnancyTest/DidntTakeTest.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
      <PregnancyTestButtons
        buttonTitle="Positive"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/PregnancyTest/Positive.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
      <PregnancyTestButtons
        buttonTitle="Faint Line"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/PregnancyTest/FaintLine.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
      <PregnancyTestButtons
        buttonTitle="Negative"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/PregnancyTest/Negative.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
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
    width: 80,
    height: 80,
    margin: -5,
  },
});
