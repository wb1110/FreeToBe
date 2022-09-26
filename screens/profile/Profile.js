import { SafeAreaView, View } from 'react-native';
import Calculations from './Calculations';

function Profile() {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Calculations />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
