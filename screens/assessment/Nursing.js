import { Text } from "@rneui/themed";
import { useState } from "react";
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from "../../components/Buttons/NarrowButton";
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import IsNursing from "../../components/IsNursing";


function Nursing({ navigation }) {
  const [nursing, setNursing] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Container>
          <Text>
            Are you currently nursing?
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <NarrowButton title="Yes" onPress={() => setNursing(true)}/>
            <NarrowButton title="No" onPress={() => setNursing(false)}/>
          </View>
        </Container>
        {nursing? <IsNursing /> : null}
        <LArrowButton onPress={() => navigation.goBack()}/>
      </Container>
    </SafeAreaView>
  );
}

export default Nursing;
