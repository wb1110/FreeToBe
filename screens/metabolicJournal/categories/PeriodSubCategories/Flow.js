/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { ScrollView, StyleSheet, View } from 'react-native';
import MenstrualFlowButton from './MenstrualFlowButton';

export default function Flow({ metabolicData, setMetabolicData }) {
  const category = 'period';
  const subCategory2 = 'menstrualFlow';
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
        <MenstrualFlowButton
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
        <MenstrualFlowButton
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
        <MenstrualFlowButton
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
