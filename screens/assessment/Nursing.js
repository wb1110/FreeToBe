import { useState } from "react";
import { SafeAreaView, View } from 'react-native';
import { Text } from "@rneui/themed";
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from "../../components/Buttons/NarrowButton";
import StandardButton from '../../components/Buttons/StandardButton';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';


function Nursing({ navigation }) {
  const [nursing, setNursing] = useState(0);
  const [partum, setPartum] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Container>
          <Text>
            Are you currently nursing?
          </Text>
          <View style={{ flexDirection: 'row' }}>
            {nursing === 1 ? <NarrowButton title="Yes" type="clear" onPress={() => setNursing(1)}/> : <NarrowButton title="Yes" onPress={() => setNursing(1)}/>}
            {nursing === 2 ? <NarrowButton title="No" type="clear" onPress={() => setNursing(2)}/> : <NarrowButton title="No" onPress={() => setNursing(2)}/>}
          </View>
        </Container>
        <Container>
        <Text>
          Are you...
        </Text>
        <View>
          {partum === 1 ? <StandardButton title="0-6 months postpartum" type="clear" onPress={() => setPartum(1)}/> : <StandardButton title="0-6 months postpartum" onPress={() => setPartum(1)}/>}
          {partum === 2 ? <StandardButton title="7+ months postpartum" type="clear" onPress={() => setPartum(2)}/> : <StandardButton title="7+ months postpartum" onPress={() => setPartum(2)}/>}
        </View>
        </Container>
        <Container>
          <StandardButton title="Submit" onPress={() => {navigation.navigate('Goals')}}/>
          <LArrowButton onPress={() => navigation.goBack()}/>
        </Container>
      </Container>
    </SafeAreaView>
  );
}

export default Nursing;
