import { Text, Tooltip, useTheme } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import useStore from '../../../state/Store';
import useAuthStore from '../../../state/AuthStore';

export default function Energy({ navigation }) {
  const { theme } = useTheme();
  const { setNewWorkActivity, setNewExerciseActivity, assessment } = useStore();
  const { id } = useAuthStore();
  const [exerciseOpen, setExerciseOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [work, setWork] = useState('');

  // console.log(assessment, 'assessment in Energy');

  const selectedWorkActivity = (activityLevel) => {
    if (activityLevel === 1) {
      return <Text>No activity</Text>;
    }
    if (activityLevel === 2) {
      return <Text>Moderate</Text>;
    }
    if (activityLevel === 3) {
      return <Text>Very active</Text>;
    }
    if (activityLevel === 4) {
      return <Text>Extremely active</Text>;
    }
  };

  useEffect(() => {
    setWork(selectedWorkActivity(assessment.workActivity));
  }, [assessment]);

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
                visible={workOpen}
                onOpen={() => {
                  setWorkOpen(true);
                }}
                onClose={() => {
                  setWorkOpen(false);
                }}
                popover={
                  <View>
                    <TouchableOpacity
                      style={{ marginBottom: 16 }}
                      onPress={() => {
                        setNewWorkActivity(id, 1);
                        setWorkOpen(!workOpen);
                      }}
                    >
                      <Text>No activity - desk job with minimal movement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ marginBottom: 16 }}
                      onPress={() => {
                        setNewWorkActivity(id, 2);
                        setWorkOpen(!workOpen);
                      }}
                    >
                      <Text>
                        Moderate - requires some movement (realtor, teacher, pastor, sales, some
                        stay at home moms)
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ marginBottom: 16 }}
                      onPress={() => {
                        setNewWorkActivity(id, 3);
                        setWorkOpen(!workOpen);
                      }}
                    >
                      <Text>
                        Very active - requires physical activity (trainer, construction worker, stay
                        at home mama with littles)
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setNewWorkActivity(id, 4);
                        setWorkOpen(!workOpen);
                      }}
                    >
                      <Text>Extremely active - professional/collegiate athlete</Text>
                    </TouchableOpacity>
                  </View>
                }
                width={200}
                height={375}
                backgroundColor={theme.colors.secondary}
                containerStyle={{
                  right: 0,
                  left: undefined,
                  position: 'absolute',
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  flex: 1,
                }}
                withOverlay
                withPointer={false}
                toggleOnPress={false}
              >
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  onPress={() => setWorkOpen(!workOpen)}
                >
                  {work}
                  <AntDesign name="caretdown" size={12} color="white" />
                </TouchableOpacity>
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
              <Tooltip
                visible={exerciseOpen}
                onOpen={() => {
                  setExerciseOpen(true);
                }}
                onClose={() => {
                  setExerciseOpen(false);
                }}
                popover={
                  <View>
                    <TouchableOpacity style={{ marginBottom: 16 }}>
                      <Text>No Exercise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 16 }}>
                      <Text>Light Exercise/Rec Sports (1-3x per week)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 16 }}>
                      <Text>Moderate Exercise/Sports (3-5x per week)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>Extreme Exercise (6-7x per week)</Text>
                    </TouchableOpacity>
                  </View>
                }
                width={200}
                height={250}
                backgroundColor={theme.colors.secondary}
                containerStyle={{
                  right: 0,
                  left: undefined,
                  position: 'absolute',
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  flex: 1,
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
