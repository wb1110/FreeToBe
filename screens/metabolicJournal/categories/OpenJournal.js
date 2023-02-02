import React, { useEffect, useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
  Keyboard,
} from 'react-native';
import { Button, Text } from '@rneui/themed';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import LArrowButton from '../../../components/Buttons/LArrowButton';

function OpenJournal({ route, navigation }) {
  const { metabolicData, setMetabolicData } = route.params;
  const richText = React.useRef();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text h3>Journal</Text>
        <Button
          title="Done"
          type="clear"
          containerStyle={{ position: 'absolute', right: 0 }}
          titleStyle={{ color: 'white' }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1, width: '100%' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ width: '100%', flex: 1 }}
      >
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
      </KeyboardAvoidingView>
      <LArrowButton onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

export default OpenJournal;
