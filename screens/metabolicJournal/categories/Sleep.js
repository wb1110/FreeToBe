/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Text, useTheme } from '@rneui/themed';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import CreateSleepEntry from './CreateSleepEntry';
import calculateTotal from './sleepFunctions/SleepFunctions';

export default function Sleep({ metabolicData, setMetabolicData }) {
  const [total, setTotal] = useState(0);
  const { theme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (metabolicData.sleep) {
      setTotal(calculateTotal(metabolicData.sleep));
    }
  }, [metabolicData.sleep]);

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        margin: '2%',
      }}
    >
      <Text h4 h4Style={{ color: theme.colors.primary, alignSelf: 'flex-start' }}>
        Sleep
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Text h4 h4Style={{ color: theme.colors.primary }}>
          Total Hours Slept: {total}
        </Text>
        <CreateSleepEntry metabolicData={metabolicData} setMetabolicData={setMetabolicData} />
        {/* <View style={{ margin: '2%', flexDirection: 'row' }}>
          {metabolicData.sleep
            ? metabolicData.sleep.map((item, index) => {
                const time1 = moment(item.startTime, 'h:mm a');
                const time2 = moment(item.endTime, 'h:mm a');
                const difference = time2.diff(time1, 'hours');
                return (
                  <View
                    key={item.id}
                    style={{
                      alignItems: 'flex-end',
                      backgroundColor: theme.colors.primary,
                      padding: '2%',
                      marginLeft: '2%',
                      flex: 1,
                    }}
                  >
                    <View style={{ flex: 1, width: '100%' }}>
                      <Text>Start Time: {moment(item.startTime).format('h:mm a')}</Text>
                      <Text>End Time: {moment(item.endTime).format('h:mm a')}</Text>
                      <Text>Hours Slept: {difference}</Text>
                    </View>
                    <View style={{ flex: 1, paddingRight: '2%' }}>
                      <FontAwesome5
                        name="ellipsis-h"
                        size={16}
                        color="white"
                        onPress={() => setModalOpen(!modalOpen)}
                      />
                    </View>

                    <Modal
                      animationType="slide"
                      transparent
                      visible={modalOpen}
                      onRequestClose={() => {
                        setModalOpen(!modalOpen);
                      }}
                    >
                      <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        onPressOut={() => setModalOpen(!modalOpen)}
                      >
                        <TouchableWithoutFeedback>
                          <View style={styles.menuContainer}>
                            <View style={styles.innerMenu}>
                              <TouchableOpacity
                                style={{
                                  padding: '5%',
                                  borderBottomColor: 'white',
                                  borderBottomWidth: 1,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}
                                onPress={() => {
                                  metabolicData.sleep.splice(index, 1);
                                  calculateTotal(metabolicData.sleep);
                                  setModalOpen(!modalOpen);
                                }}
                              >
                                <MaterialIcons
                                  name="delete-outline"
                                  size={24}
                                  color={theme.colors.white}
                                />
                                <Text style={{ marginLeft: '2%' }}>Delete Sleep Session</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </TouchableWithoutFeedback>
                      </TouchableOpacity>
                    </Modal>
                  </View>
                );
              })
            : null}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '20%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerMenu: {
    backgroundColor: '#B65C3D',
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
  },
});
