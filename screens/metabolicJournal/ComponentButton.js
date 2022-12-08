import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

function ComponentButton({ buttonTitle, buttonIcon }) {
  return (
    <TouchableOpacity style={{ borderWidth: 1, alignItems: 'center', marginLeft: '2%' }}>
      <View
        style={{
          borderWidth: 1,
          backgroundColor: 'white',
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
