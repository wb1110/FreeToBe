import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '@rneui/themed';
import { Formik } from 'formik';
import { useState } from 'react';
import {
  Keyboard,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';
import useTrackerStore from '../../state/TrackerStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  formBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%',
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'green',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function AddMeal({ modalOpen, setModalOpen, mealList }) {
  const state = useTrackerStore();
  const [formValues, setFormValues] = useState({
    mealName: '',
    mealTime: '',
  });

  // eslint-disable-next-line consistent-return
  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('tracker', jsonValue);
  //   } catch (e) {
  //     // saving error
  //     return e;
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Modal
          animationType="fade"
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
            <View style={styles.boxContainer}>
              <Formik
                initialValues={{ formValues }}
                onSubmit={(values) => {
                  setModalOpen(!modalOpen);
                  mealList.push({ mealName: values.mealName, mealTime: values.mealTime });
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                  <View style={styles.formBox}>
                    <Input
                      label="Meal Name"
                      onChangeText={handleChange('mealName')}
                      onBlur={handleBlur('mealName')}
                      value={values.mealName}
                      errorMessage={errors.mealName}
                      containerStyle={{ width: '100%' }}
                    />
                    <Input
                      label="Meal Time"
                      onChangeText={handleChange('mealTime')}
                      onBlur={handleBlur('mealTime')}
                      value={values.mealTime}
                      errorMessage={errors.mealTime}
                    />
                    <StandardButton title="Submit" onPress={() => handleSubmit()} />
                  </View>
                )}
              </Formik>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddMeal;
