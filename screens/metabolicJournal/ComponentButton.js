import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

function ComponentButton({ buttonTitle, buttonIcon, buttonColor }) {
  return (
    <TouchableOpacity style={{ alignItems: 'center', marginLeft: '2%', width: 80 }}>
      <View
        style={{
          backgroundColor: buttonColor,
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
        }}
      >
        <Text
          style={{
            position: 'absolute',
            color: 'black',
            left: 7,
            top: 14,
          }}
        >
          {buttonIcon}
        </Text>
      </View>
      <Text style={{ textAlign: 'center' }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default ComponentButton;
