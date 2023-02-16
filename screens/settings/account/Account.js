import { Input, Text, useTheme } from '@rneui/themed';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import OverlayForm from '../../../components/OverlayForm';
import useAuthStore from '../../../state/AuthStore';
import SettingsContainer from '../SettingsContainer';
import Email from './Email';
import Password from './Password';

export default function Account({ navigation }) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}
    >
      <LArrowButton onPress={() => navigation.goBack()} />
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          backgroundColor: theme.colors.primary,
          alignItems: 'flex-end',
        }}
      >
        <Email />
        <Password />
      </View>
    </View>
  );
}
