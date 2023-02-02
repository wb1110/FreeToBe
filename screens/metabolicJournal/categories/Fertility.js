/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Text } from '@rneui/themed';
import { View } from 'react-native';
import Ovulation from './FertilitySubCategories/Ovulation';
import PregnancyTest from './FertilitySubCategories/PregnancyTest';

export default function Fertility({ metabolicData, setMetabolicData }) {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flex: 1,
        margin: '4% 2%',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>Fertility</Text>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Text h4>Pregnancy Test</Text>
          <PregnancyTest metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
          <Text h4>Ovulation</Text>
          <Ovulation metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
        </View>
      </View>
    </View>
  );
}
