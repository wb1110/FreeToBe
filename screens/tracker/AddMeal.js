import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FAB, Input, SearchBar } from '@rneui/themed';
import { Formik } from 'formik';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StandardButton from '../../components/Buttons/StandardButton';

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

function AddMeal({ modalOpen, setModalOpen }) {
  const [search, setSearch] = useState('');
  const [formValues, setFormValues] = useState({
    foodName: 'Burrito',
    calories: '',
    fatGrams: '',
    carbsGrams: '',
    proteinGrams: '',
  });

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };
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
            <TouchableWithoutFeedback>
              <View style={styles.boxContainer}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{ flex: 1 }}
                >
                  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{ justifyContent: 'space-between', flex: 1 }}>
                      <View style={{ flex: 1 }}>
                        <View style={{ width: '100%', alignItems: 'flex-end' }} />
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
                <Formik
                  initialValues={{ formValues }}
                  onSubmit={(values) => {
                    setFormValues(values);
                  }}
                >
                  {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.formBox}>
                      <SearchBar
                        placeholder="Type Here..."
                        onChangeText={updateSearch}
                        value={search}
                        inputContainerStyle={{ backgroundColor: 'white' }}
                        containerStyle={{
                          borderBottomColor: 'transparent',
                          borderTopColor: 'transparent',
                          width: '100%',
                        }}
                      />
                      <FAB
                        icon={
                          <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
                        }
                        size="medium"
                        color="white"
                        style={{ marginRight: '2%' }}
                        onPress={() => setModalOpen(!modalOpen)}
                      />
                      <Input
                        label="Food Name"
                        onChangeText={handleChange('foodName')}
                        onBlur={handleBlur('foodName')}
                        value={values.foodName}
                        errorMessage={errors.foodName}
                        containerStyle={{ width: '100%' }}
                      />
                      <Input
                        label="Calories"
                        onChangeText={handleChange('calories')}
                        onBlur={handleBlur('calories')}
                        value={values.calories}
                        errorMessage={errors.calories}
                      />
                      <Input
                        label="Fat"
                        onChangeText={handleChange('fatGrams')}
                        onBlur={handleBlur('fatGrams')}
                        value={values.fatGrams}
                        errorMessage={errors.fatGrams}
                      />
                      <Input
                        label="Carbs"
                        onChangeText={handleChange('carbsGrams')}
                        onBlur={handleBlur('carbsGrams')}
                        value={values.carbsGrams}
                        errorMessage={errors.carbsGrams}
                      />
                      <Input
                        label="Protein"
                        onChangeText={handleChange('proteinGrams')}
                        onBlur={handleBlur('proteinGrams')}
                        value={values.proteinGrams}
                        errorMessage={errors.proteinGrams}
                      />
                      <StandardButton title="Submit" onPress={() => handleSubmit()} />
                    </View>
                  )}
                </Formik>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddMeal;
