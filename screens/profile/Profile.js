import { SafeAreaView, View } from 'react-native';
import useStore from '../../state/Store';
import PFCPieChart from './PFCPieChart';

function Profile() {
  const state = useStore();
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <PFCPieChart TDEE={state.assessment.tdee} />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
