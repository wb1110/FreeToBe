import { Input } from "@rneui/themed";
import { Formik } from 'formik';
import { View } from "react-native";
import StandardButton from "../../../components/Buttons/StandardButton";
import useStore from "../../../state/Store";

function NineSite({ navigation }) {
  const state = useStore();
  const bodyFat = (sum, weight) => {
    const result = (sum * 27)/weight
   return result;
  };
  
  return (
  <Formik
    initialValues={{
      abdominal: state.assessment.abdominal, 
      triceps: state.assessment.triceps, 
      suprailiac: state.assessment.suprailiac,
      thigh: state.assessment.thigh,
      chest: state.assessment.chest, 
      bicep: state.assessment.bicep,
      subscapular: state.assessment.subscapular,
      lowerBack: state.assessment.lowerBack,
      calf: state.assessment.calf,
      bodyFat: state.assessment.bodyFat,
    }}
    onSubmit={values => {
      const recurranceValue = {...values};
      recurranceValue.bodyFat = bodyFat((+values.abdominal + +values.triceps + +values.suprailiac + +values.thigh + +values.chest + +values.bicep + +values.subscapular + +values.lowerBack + +values.calf),state.assessment.weight)
      state.setBodyFat(recurranceValue);
    }}
  >
{({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={{ alignItems: 'center' }}>
       <View style={{ width: "100%", flex: 1, flexGrow: 1, flexDirection: "row", marginTop: "20%" }}>
         <View style={{ flex: 1, flexGrow: 1 }}>
          <Input
          label='Abdominal' 
          onChangeText={handleChange('abdominal')}
          onBlur={handleBlur('abdominal')}
          value={values.abdominal}
        />
        <Input 
          label='Triceps' 
          onChangeText={handleChange('triceps')}
          onBlur={handleBlur('triceps')}
          value={values.triceps}
        />
        <Input
          label='Suprailiac' 
          onChangeText={handleChange('suprailiac')}
          onBlur={handleBlur('suprailiac')}
          value={values.suprailiac}
        />
        <Input
          label='Thigh' 
          onChangeText={handleChange('thigh')}
          onBlur={handleBlur('thigh')}
          value={values.thigh}
        />
        <Input
        label='Chest' 
        onChangeText={handleChange('chest')}
        onBlur={handleBlur('chest')}
        value={values.chest}
       />
       </View>
       <View style={{ flex: 1, flexGrow: 1 }}>
        <Input
          label='Midaxillary' 
          onChangeText={handleChange('midaxillary')}
          onBlur={handleBlur('midaxillary')}
          value={values.midaxillary}
        />
        <Input
          label='Subscapular' 
          onChangeText={handleChange('subscapular')}
          onBlur={handleBlur('subscapular')}
          value={values.subscapular}
        />
        <Input
          label='LowerBack' 
          onChangeText={handleChange('lowerBack')}
          onBlur={handleBlur('lowerBack')}
          value={values.lowerBack}
        />
        <Input
          label='Calf' 
          onChangeText={handleChange('calf')}
          onBlur={handleBlur('calf')}
          value={values.calf}
        />
       </View>
       </View>
       <StandardButton title="Submit" onPress={() => {navigation.navigate('Pregnant'); handleSubmit()}}/>
     </View>
     )}
  </Formik>
  )
}

export default NineSite