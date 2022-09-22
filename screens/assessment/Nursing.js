import { Text } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from '../../components/Buttons/NarrowButton';
import NarrowButtonSelected from '../../components/Buttons/NarrowButtonSelected';
import Container from '../../components/Container';
import FocusedStatusBar from '../../components/FocusedStatusBar';
import IsNursing from '../../components/IsNursing';
import useStore from '../../state/Store';

function Nursing({ navigation }) {
  const state = useStore();
  const [nursing, setNursing] = useState(false);

  console.log(state.assessment);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Container>
          <Text h4>Are you currently nursing?</Text>
          <View style={{ flexDirection: 'row' }}>
            {nursing ? (
              <NarrowButtonSelected title="Yes" onPress={() => setNursing(true)} />
            ) : (
              <NarrowButton title="Yes" onPress={() => setNursing(true)} />
            )}
            <NarrowButton
              title="No"
              onPress={() => {
                setNursing(false);
                navigation.navigate('Goals');
              }}
            />
          </View>
          {nursing ? <IsNursing navigation={navigation} /> : null}
        </Container>
        <LArrowButton onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

export default Nursing;
