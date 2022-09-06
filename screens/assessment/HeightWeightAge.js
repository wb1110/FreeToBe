import { SafeAreaView, TextInput, View } from 'react-native';
import { Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '@rneui/base';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { COLORS } from '../../constants/theme';
import useStore from '../../state/Store';


function HeightWeightAge({ navigation }) {
  const state = useStore();
  console.log(state.assessment.gender)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <Input label='Height' />
        <Input label='Weight' />
        <Input label='Age' />
        <Button title="Submit" buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => {navigation.navigate('BodyFatPercentage')}}
          />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {navigation.navigate('Gender')}}>
            <Ionicons name="arrow-back-circle" size={48} color={COLORS.primary} navigation={navigation} />
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default HeightWeightAge;
