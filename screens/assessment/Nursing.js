import { Text } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import LArrowButton from '../../components/Buttons/LArrowButton';
import NarrowButton from '../../components/Buttons/NarrowButton';
import NarrowButtonSelected from '../../components/Buttons/NarrowButtonSelected';
import Container from '../../components/Container';
import IsNursing from '../../components/IsNursing';

function Nursing({ navigation }) {
  const [nursing, setNursing] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <LArrowButton onPress={() => navigation.goBack()} />
        </Container>
      </Container>
    </SafeAreaView>
  );
}

export default Nursing;
