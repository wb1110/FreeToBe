import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function ComponentButton({ buttonTitle, buttonIcon, buttonColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: 'center', marginLeft: '2%', width: 80, height: 90 }}
    >
      <View>
        {buttonIcon}
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: 'green',
            borderRadius: 20,
          }}
        >
          <FontAwesome5 name="check-circle" size={24} color="white" />
        </View>
      </View>
      <Text style={{ textAlign: 'center' }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default ComponentButton;
