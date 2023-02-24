import { Text, useTheme } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import useStore from '../../../state/Store';

export default function BMI() {
  const { assessment } = useStore();
  const { theme } = useTheme();

  function calculateBMI(weightStr, heightStr) {
    // input validation: check that height string is in expected format
    if (typeof heightStr === 'string') {
      const heightSplit = heightStr.split('ft ');
      const feet = heightSplit[0];
      const inches = heightSplit[1];
      const totalInches = parseFloat(feet) * 12 + parseFloat(inches);
      const weight = parseFloat(weightStr);

      // convert units to metric (pounds to kilograms, inches to meters)
      const weightInKg = weight / 2.205;
      const heightInMeters = totalInches * 0.0254;

      // calculate BMI using the formula
      const bmi = weightInKg / (heightInMeters * heightInMeters);

      return bmi.toFixed(1); // round BMI to 1 decimal place and return as a string
    }
    // parse numerical values and calculate height in inches
    const weight = parseFloat(weightStr);

    // convert units to metric (pounds to kilograms, inches to meters)
    const weightInKg = weight / 2.205;
    const heightInMeters = heightStr * 0.0254;

    // calculate BMI using the formula
    const bmi = weightInKg / (heightInMeters * heightInMeters);

    return bmi.toFixed(1); // round BMI to 1 decimal place and return as a string
  }

  return (
    <TouchableOpacity
      style={{
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: '1%',
        borderBottomColor: theme.colors.secondary,
      }}
    >
      <Text h4>Body Mass Index (BMI)</Text>
      <Text style={{ margin: '2%' }}>
        {assessment.height && assessment.weight
          ? calculateBMI(assessment.weight, assessment.height)
          : null}
      </Text>
    </TouchableOpacity>
  );
}
