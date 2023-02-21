import { Text, Tooltip, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStore from '../../../state/Store';
import useAuthStore from '../../../state/AuthStore';

export default function WorkActivitySelector() {
  const { theme } = useTheme();
  const { setNewWorkActivity, assessment } = useStore();
  const { id } = useAuthStore();
  const [workOpen, setWorkOpen] = useState(false);
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
  const [work, setWork] = useState(selectedWorkActivity(assessment.workActivity) || '');

  // console.log(assessment, 'assessment in Energy');

  useEffect(() => {
    setWork(selectedWorkActivity(assessment.workActivity));
  }, [assessment]);

  return (
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
              Moderate - requires some movement (realtor, teacher, pastor, sales, some stay at home
              moms)
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
              Very active - requires physical activity (trainer, construction worker, stay at home
              mama with littles)
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
  );
}
