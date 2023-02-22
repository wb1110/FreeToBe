/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Image, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import InputButton from '../InputButton';
import Flow from './PeriodSubCategories/Flow';
import Symptoms from './PeriodSubCategories/Symptoms';

export default function Period({ metabolicData, setMetabolicData, navigation }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '4% 2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Period</Text>
        <View style={{ flex: 1, alignItems: 'flex-start', marginTop: 16 }}>
          <InputButton
            buttonTitle="Open Calendar"
            buttonIcon={
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('../../../assets/icons/calendarIcon.png')}
                />
              </View>
            }
            onPress={() => {
              navigation.navigate('MJCalendar');
            }}
          />
          <Text h4 h4Style={{ marginTop: 16 }}>
            Symptoms
          </Text>
          <Symptoms metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
          <Text h4 h4Style={{ marginTop: 16 }}>
            Menstrual Flow
          </Text>
          <Flow metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
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
    width: 60,
    height: 60,
    margin: -5,
  },
});
