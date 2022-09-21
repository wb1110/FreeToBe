import { Text } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import StandardButton from './Buttons/StandardButton';
import StandardButtonSelected from './Buttons/StandardButtonSelected';

function IsNursing({ navigation }) {
  const [partum, setPartum] = useState(0);
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text h4>Are you...</Text>
        <View>
          {partum === 1 ? (
            <StandardButtonSelected title="0-6 months postpartum" onPress={() => setPartum(1)} />
          ) : (
            <StandardButton title="0-6 months postpartum" onPress={() => setPartum(1)} />
          )}
          {partum === 2 ? (
            <StandardButtonSelected title="7+ months postpartum" onPress={() => setPartum(2)} />
          ) : (
            <StandardButton title="7+ months postpartum" onPress={() => setPartum(2)} />
          )}
        </View>
      </View>
      {partum ? (
        <StandardButton
          title="Submit"
          onPress={() => {
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
