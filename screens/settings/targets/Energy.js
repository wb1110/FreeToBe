import { Text, Tooltip, useTheme } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LArrowButton from '../../../components/Buttons/LArrowButton';
import useStore from '../../../state/Store';
import useAuthStore from '../../../state/AuthStore';
import WorkActivitySelector from './WorkActivitySelector';
import ExerciseActivitySelector from './ExerciseActivitySelector';

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
              <WorkActivitySelector />
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
              <ExerciseActivitySelector />
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
