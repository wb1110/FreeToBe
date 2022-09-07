import { Ionicons } from '@expo/vector-icons';
import { Button, Input } from "@rneui/themed";
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import RoundButton from '../../components/RoundButton';


function CaliperSites({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>
          How many sites did you use?
        </CustomText>
        <View style={{ flexDirection: 'row' }}>
          <RoundButton />
          <Button title="3" buttonStyle={{
                borderWidth: 2,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 45,
                marginHorizontal: 10,
                marginVertical: 10,
              }} 
              />
          <Button title="4" buttonStyle={{
                borderWidth: 2,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 45,
                marginHorizontal: 10,
                marginVertical: 10,
              }}/>
          <Button title="7" buttonStyle={{
                borderWidth: 2,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 45,
                marginHorizontal: 10,
                marginVertical: 10,
              }}/>
              <Button title="9" buttonStyle={{
                borderWidth: 2,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 45,
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
            <Ionicons name="arrow-back-circle" size={48} navigation={navigation} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Ionicons name="arrow-forward-circle" size={48} />
          </TouchableOpacity>
        </View>
      </Container>
    </SafeAreaView>
  );
}

export default CaliperSites;
