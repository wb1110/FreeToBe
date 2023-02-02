/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import OvulationButtons from './OvulationButtons';

export default function Ovulation({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: '2%',
        marginBottom: '2%',
      }}
    >
      <OvulationButtons
        buttonTitle="Didn't take a test"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/Ovulation/DidntTest.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
      <OvulationButtons
        buttonTitle="Test positive"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/Ovulation/TestedPositive.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
      <OvulationButtons
        buttonTitle="Test negative"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/Ovulation/TestedNegative.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
      />
      <OvulationButtons
        buttonTitle="Ovulating"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/Ovulation/Ovulating.png')}
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
