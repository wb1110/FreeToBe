/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/base';
import { Input, Text } from '@rneui/themed';
import { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ComponentButton from '../ComponentButton';

export default function Bowel({ metabolicData, setMetabolicData }) {
  const category = 'bowelMovements';
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
          <Text h3>Bowel Movements</Text>
          <View style={{ flex: 1 }}>
            <Text>
              Total: {`\n`} Healthy: {`\n`} Constipated: {`\n`} Diarrea: {`\n`}
            </Text>
            <View
              style={{
                flexDirection: 'row',
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
