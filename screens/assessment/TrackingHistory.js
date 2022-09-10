import { Text } from "@rneui/themed";
import { useState } from "react";
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from "../../components/Buttons/NarrowButton";
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';

function TrackedMacros({ navigation }) {
  return <Container>
      <Text>
      Have you had any experience with tracking calories?
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <NarrowButton title="Yes" onPress={() => navigation.navigate('InternalStress')}/>
        <NarrowButton title="No" onPress={() => navigation.navigate('InternalStress')}/>
      </View>
    </Container>
}
function TrackingHistory({ navigation }) {
  const [macrosHistory, setMacrosHistory] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Container>
          <Text>
            Have you had any experience with tracking macros?
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <NarrowButton title="Yes" onPress={() => setMacrosHistory(true)}/>
            <NarrowButton title="No" onPress={() => {setMacrosHistory(false); navigation.navigate('Goals') }}/>
          </View>
        </Container>
        {macrosHistory? <TrackedMacros navigation={navigation}/> : null}
        <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default TrackingHistory;
