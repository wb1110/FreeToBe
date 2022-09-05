import { SafeAreaView, TextInput, View } from 'react-native';
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { COLORS } from '../../constants/theme';


function BodyFatKnown({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Input label='Body Fat Percentage' />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {navigation.navigate('BodyFatPercentage')}}>
            <Ionicons name="arrow-back-circle" size={48} color={COLORS.primary} navigation={navigation} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Ionicons name="arrow-forward-circle" size={48} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default BodyFatKnown;
