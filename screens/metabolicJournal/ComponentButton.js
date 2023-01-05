import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

function ComponentButton({ buttonTitle, buttonIcon, buttonColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: 'center', marginLeft: '2%', width: 80, height: 90 }}
    >
      <View
        style={{
          backgroundColor: buttonColor,
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
        }}
      >
        <View
          style={{
            position: 'absolute',
            left: 13,
            top: 12,
          }}
        >
          {buttonIcon}
        </View>
      </View>
      <Text style={{ textAlign: 'center' }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default ComponentButton;
