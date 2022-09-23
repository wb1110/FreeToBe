import { Text } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import useStore from '../state/Store';
import StandardButton from './Buttons/StandardButton';
import StandardButtonSelected from './Buttons/StandardButtonSelected';

function IsNursing({ navigation }) {
  const state = useStore();
  const [partum, setPartum] = useState(0);
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text h4>Are you...</Text>
        <View>
          {partum === 330 ? (
            <StandardButtonSelected title="0-6 months postpartum" onPress={() => setPartum(330)} />
          ) : (
            <StandardButton title="0-6 months postpartum" onPress={() => setPartum(330)} />
          )}
          {partum === 400 ? (
            <StandardButtonSelected title="7+ months postpartum" onPress={() => setPartum(400)} />
          ) : (
            <StandardButton title="7+ months postpartum" onPress={() => setPartum(400)} />
          )}
        </View>
      </View>
      {partum ? (
        <StandardButton
          title="Submit"
          onPress={() => {
            state.setNursing(partum);
            navigation.navigate('Goals');
          }}
        />
      ) : (
        <StandardButton title="Submit" disabled />
      )}
    </View>
  );
}

export default IsNursing;
