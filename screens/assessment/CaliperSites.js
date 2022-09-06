import { SafeAreaView, TextInput, View } from 'react-native';
import { Button, Input } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { COLORS } from '../../constants/theme';
import CustomText from '../../components/CustomText';


function CaliperSites({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          How many sites did you use?
        </CustomText>
        <View style={{ flexDirection: 'row' }}>
          <Button title="3" buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 50,
                marginHorizontal: 10,
                marginVertical: 10,
              }} 
              />
          <Button title="4" buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 50,
                marginHorizontal: 10,
                marginVertical: 10,
              }}/>
          <Button title="7" buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 50,
                marginHorizontal: 10,
                marginVertical: 10,
              }}/>
              <Button title="9" buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 50,
                marginHorizontal: 10,
                marginVertical: 10,
              }}/>
              </View>
              <CustomText>
          Type in your measurements in mm
        </CustomText>
        <Input label='Abdominal' />
        <Input label='Triceps' />
        <Input label='Suprailiac' />
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

export default CaliperSites;
