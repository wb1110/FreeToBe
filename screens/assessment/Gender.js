import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { FocusedStatusBar } from '../../components';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import Button from '../../components/Button';

function Gender() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <Container>
        <CustomText>Before we get started in order to make the best plan for you, we will need some more information.</CustomText>
        <CustomText>Gender</CustomText>
        <CustomText>Fill in the following to get started:</CustomText>
        <Button>Female</Button><Button>Nonbinary</Button>
        <Button>Submit</Button>
      </Container>
    </SafeAreaView>
  );
}

export default Gender;
