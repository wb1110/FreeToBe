import { SafeAreaView, TextInput, View } from 'react-native';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


function HeightWeightAge({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Input label='Height' />
        <Input label='Weight' />
        <Input label='Age' />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {navigation.navigate('Gender')}}>
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

export default HeightWeightAge;
