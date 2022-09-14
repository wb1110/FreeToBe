import { Text } from "@rneui/themed";
import { useState } from "react";
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from "../../components/Buttons/NarrowButton";
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';

function TrackedMacros({ navigation }) {
  return <View>
      <Text h4>
      Have you had any experience with tracking calories?
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <NarrowButton title="Yes" onPress={() => navigation.navigate('InternalStress')}/>
        <NarrowButton title="No" onPress={() => navigation.navigate('InternalStress')}/>
      </View>
    </View>
}
function TrackingHistory({ navigation }) {
  const [macrosHistory, setMacrosHistory] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Container>
          <Text h4>
            Have you had any experience with tracking macros?
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <NarrowButton title="Yes" onPress={() => setMacrosHistory(true)}/>
            <NarrowButton title="No" onPress={() => {setMacrosHistory(false); navigation.navigate('InternalStress') }}/>
          </View>
        {macrosHistory? <TrackedMacros navigation={navigation}/> : null}
        </Container>
        <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default TrackingHistory;
