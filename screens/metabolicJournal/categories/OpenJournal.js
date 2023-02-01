import React, { useState } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import LArrowButton from '../../../components/Buttons/LArrowButton';

function OpenJournal({ route, navigation }) {
  const { metabolicData, setMetabolicData } = route.params;
  const richText = React.useRef();
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <Text h3>Journal</Text>
          <RichEditor
            ref={richText}
            initialContentHTML={metabolicData.journal}
            onChange={(text) => {
              setMetabolicData({
                ...metabolicData,
                journal: text,
              });
            }}
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
          actions.removeFormat,
          actions.checkboxList,
          actions.undo,
          actions.redo,
        ]}
        iconMap={{
          [actions.heading1]: ({ tintColor }) => <Text style={[{ color: tintColor }]}>H1</Text>,
        }}
      />
      <LArrowButton onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default OpenJournal;
