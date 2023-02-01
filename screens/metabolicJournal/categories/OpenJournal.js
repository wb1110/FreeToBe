import React, { useState } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, View } from 'react-native';
import { Text } from '@rneui/themed';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import LArrowButton from '../../../components/Buttons/LArrowButton';

function OpenJournal({ route, navigation }) {
  const { metabolicData, setMetabolicData } = route.params;
  const richText = React.useRef();
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Text h3>Journal</Text>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <RichEditor
            ref={richText}
            initialContentHTML={metabolicData.journal}
            onChange={(text) => {
              setMetabolicData({
                ...metabolicData,
                journal: text,
              });
            }}
            style={{ minHeight: 1000 }}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <RichToolbar
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.setStrikethrough,
          actions.setUnderline,
          actions.checkboxList,
          actions.undo,
          actions.redo,
        ]}
        iconMap={{
          [actions.heading1]: ({ tintColor }) => <Text style={[{ color: tintColor }]}>H1</Text>,
        }}
        style={{ width: '100%' }}
      />
      <LArrowButton onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default OpenJournal;
