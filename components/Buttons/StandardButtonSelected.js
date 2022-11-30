import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import StandardButton from './StandardButton';

export function StandardButtonSelected(props) {
  const { title, onPress, type, disabled } = props;
  const { theme } = useTheme();

  return (
    <Button
      title={title}
      buttonStyle={{
        borderWidth: 2,
        borderRadius: 30,
        borderColor: theme.colors.white,
      }}
      containerStyle={{
        width: 200,
        marginHorizontal: 10,
        marginVertical: 10,
      }}
      color={theme.colors.white}
      titleStyle={{
        color: theme.colors.primary,
      }}
      type={type}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

export function SelectedButton({ title, selected, setSelected }) {
  return (
    <View>
      {selected === title ? (
        <StandardButtonSelected title={`${title}`} onPress={() => setSelected(title)} />
      ) : (
        <StandardButton title={`${title}`} onPress={() => setSelected(title)} />
      )}
    </View>
  );
}
