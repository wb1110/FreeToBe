/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import ComponentButton from '../../ComponentButton';

export default function Flow({ metabolicData, setMetabolicData }) {
  const category = 'period';
  const subCategory1 = 'symptoms';
  const subCategory2 = 'mentrualFlow';
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <ComponentButton
        buttonTitle="Light"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/MenstralFlowIcons/Light.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
        category={category}
        subCategory={subCategory2}
      />
      <ComponentButton
        buttonTitle="Medium"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/MenstralFlowIcons/Medium.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
        category={category}
        subCategory={subCategory2}
      />
      <ComponentButton
        buttonTitle="Heavy"
        buttonIcon={
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../../../../assets/icons/MenstralFlowIcons/Heavy.png')}
            />
          </View>
        }
        metabolicData={metabolicData}
        setMetabolicData={setMetabolicData}
        category={category}
        subCategory={subCategory2}
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
