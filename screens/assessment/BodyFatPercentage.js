import { SafeAreaView, TextInput, View } from 'react-native';
import { Button } from "@rneui/themed";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import { COLORS } from '../../constants/theme';
import CustomText from '../../components/CustomText';


function BodyFatPercentage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          Body Fat % is the percentage of fat on our body compared to every thing else in our body such as organic muscle tissue, water, and bones. Fat is essential for our bodies to thrive. Women in particular need somewhere between 21-33 percent body fat.
        </CustomText>
        <CustomText>
          Do you know your BF%
        </CustomText>
          <Button title="Yes" buttonStyle={{
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
              onPress={() => {navigation.navigate('BodyFatKnown')}}
            />
          <Button title="No" buttonStyle={{
                backgroundColor: COLORS.primary,
                borderWidth: 2,
                borderColor: COLORS.primary,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}/>
          <Button title="I used calipers and need to calculate it" buttonStyle={{
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
              onPress={() => {navigation.navigate('CaliperSites')}}
            />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {navigation.navigate('HeightWeightAge')}}>
            <Ionicons name="arrow-back-circle" size={48} color={COLORS.primary} navigation={navigation} />
          </TouchableOpacity>
          <TouchableOpacity disabled onPress={() => {navigation.navigate('CaliperSites')}}>
            <Ionicons name="arrow-forward-circle" size={48} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default BodyFatPercentage;
