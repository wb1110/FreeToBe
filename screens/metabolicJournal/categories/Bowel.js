/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image } from '@rneui/base';
import { Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Bowel({ metabolicData, setMetabolicData }) {
  const category = 'bowelMovements';
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '4% 2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Bowel Movements</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '2%',
          }}
        >
          <ComponentButton
            buttonTitle="Healthy"
            buttonIcon={
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/icons/BowelMovements/Healthy.png')}
                />
              </View>
            }
            metabolicData={metabolicData}
            setMetabolicData={setMetabolicData}
            category={category}
          />
          <ComponentButton
            buttonTitle="Constipated"
            buttonIcon={
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/icons/BowelMovements/Constipated.png')}
                />
              </View>
            }
            metabolicData={metabolicData}
            setMetabolicData={setMetabolicData}
            category={category}
          />
          <ComponentButton
            buttonTitle="Diarrea"
            buttonIcon={
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/icons/BowelMovements/Diarrhea.png')}
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
