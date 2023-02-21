import { Text, Tooltip, useTheme } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LArrowButton from '../../../components/Buttons/LArrowButton';

export default function Energy({ navigation }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}
    >
      <LArrowButton onPress={() => navigation.goBack()} />
      <Text h4 h4Style={{ margin: 16 }}>
        Energy Burned
      </Text>
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: theme.colors.secondary,
          borderRadius: 25,
        }}
      >
        <View style={styles.container}>
          <Text h4>BMR</Text>
          <Text h4>7777 kcal</Text>
        </View>
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: 'white' }}>
          <Text h4>Activity Level</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}
          >
            <Text h4>At work</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Tooltip
                visible={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                popover={
                  <TouchableOpacity>
                    <Text>Tooltip info goes here</Text>
                  </TouchableOpacity>
                }
                width={200}
                backgroundColor={theme.colors.secondary}
                containerStyle={{
                  right: 0,
                  left: undefined,
                  position: 'absolute',
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                }}
                withOverlay
                withPointer={false}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>Lightly Active (BMR x 0.375)</Text>
                  <AntDesign name="caretdown" size={12} color="white" />
                </View>
              </Tooltip>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}
          >
            <Text h4>Outside work</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Lightly Active (BMR x 0.375)</Text>
              <AntDesign name="caretdown" size={12} color="white" />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            padding: 16,
          }}
        >
          <Text>Total Energy Burned (TDEE)</Text>
          <Text h4> = 2553</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 16,
  },
});
