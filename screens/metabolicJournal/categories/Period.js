/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Text } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import Flow from './PeriodSubCategories/Flow';
import Symptoms from './PeriodSubCategories/Symptoms';

export default function Period({ metabolicData, setMetabolicData }) {
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
          <Text h3>Period</Text>
          <View style={{ flex: 1 }}>
            <Text>Calendar Icon Here</Text>
            <Text h4>Symptoms</Text>
            <Symptoms metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
            <Text h4>Menstrual Flow</Text>
            <Flow metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
