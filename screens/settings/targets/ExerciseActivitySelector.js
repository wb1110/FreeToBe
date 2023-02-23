import { Text, Tooltip, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStore from '../../../state/Store';
import useAuthStore from '../../../state/AuthStore';

export default function ExerciseActivitySelector() {
  const { theme } = useTheme();
  const { setNewExerciseActivity, assessment } = useStore();
  const { id } = useAuthStore();
  const [exerciseOpen, setWorkOpen] = useState(false);
  const selectedExerciseActivity = (activityLevel) => {
    if (activityLevel === 1) {
      return <Text>No exercise</Text>;
    }
    if (activityLevel === 2) {
      return <Text>Light</Text>;
    }
    if (activityLevel === 3) {
      return <Text>Moderate</Text>;
    }
    if (activityLevel === 4) {
      return <Text>Extreme</Text>;
    }
  };
  const [exercise, setExercise] = useState(
    selectedExerciseActivity(assessment.exerciseActivity) || ''
  );

  useEffect(() => {
    setExercise(selectedExerciseActivity(assessment.exerciseActivity));
  }, [assessment]);

  return (
    <Tooltip
      visible={exerciseOpen}
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
              setNewExerciseActivity(id, 1);
              setWorkOpen(!exerciseOpen);
            }}
          >
            <Text>No exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() => {
              setNewExerciseActivity(id, 2);
              setWorkOpen(!exerciseOpen);
            }}
          >
            <Text>Light Exercise/Rec Sports (1-3x per week)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginBottom: 16 }}
            onPress={() => {
              setNewExerciseActivity(id, 3);
              setWorkOpen(!exerciseOpen);
            }}
          >
            <Text>Moderate Exercise/Sports (3-5x per week)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setNewExerciseActivity(id, 4);
              setWorkOpen(!exerciseOpen);
            }}
          >
            <Text>Extreme Exercise (6-7x per week)</Text>
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
        onPress={() => setWorkOpen(!exerciseOpen)}
      >
        {exercise}
        <AntDesign name="caretdown" size={12} color="white" />
      </TouchableOpacity>
    </Tooltip>
  );
}
