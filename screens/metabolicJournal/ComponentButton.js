import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';

function ComponentButton({ buttonTitle, buttonIcon, buttonColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: 'center', marginLeft: '2%', width: 80, height: 90 }}
    >
      {buttonIcon}
      <Text style={{ textAlign: 'center' }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default ComponentButton;
