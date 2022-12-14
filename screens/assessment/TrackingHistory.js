import { Text } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from '../../components/Buttons/NarrowButton';
import NarrowButtonSelected from '../../components/Buttons/NarrowButtonSelected';
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';

function TrackingHistory({ navigation }) {
  const [macrosHistory, setMacrosHistory] = useState(0);
  const [caloriesHistory, setCaloriesHistory] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Container>
          <Text h4>Have you had any experience with tracking macros?</Text>
          <View style={{ flexDirection: 'row' }}>
            {macrosHistory === 1 ? (
              <NarrowButtonSelected title="Yes" onPress={() => setMacrosHistory(1)} />
            ) : (
              <NarrowButton title="Yes" onPress={() => setMacrosHistory(1)} />
            )}
            {macrosHistory === 2 ? (
              <NarrowButtonSelected title="No" onPress={() => setMacrosHistory(2)} />
            ) : (
              <NarrowButton title="No" onPress={() => setMacrosHistory(2)} />
            )}
          </View>
          <Text h4>Have you had any experience with tracking calories?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {caloriesHistory === 1 ? (
              <NarrowButtonSelected title="Yes" onPress={() => setCaloriesHistory(1)} />
            ) : (
              <NarrowButton title="Yes" onPress={() => setCaloriesHistory(1)} />
            )}
            {caloriesHistory === 2 ? (
              <NarrowButtonSelected title="No" onPress={() => setCaloriesHistory(2)} />
            ) : (
              <NarrowButton title="No" onPress={() => setCaloriesHistory(2)} />
            )}
          </View>
          <StandardButton title="Submit" onPress={() => navigation.navigate('InternalStress')} />
          <LArrowButton onPress={() => navigation.goBack()} />
        </Container>
      </Container>
    </SafeAreaView>
  );
}

export default TrackingHistory;
