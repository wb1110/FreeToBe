import { Button, useTheme } from "@rneui/themed";

export default function NarrowButtonSelected(props) {
  const { title, onPress, type } = props;
  const { theme } = useTheme();

  return (
    <Button title={title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
      borderColor: theme.colors.white
    }}
    containerStyle={{
      width: 100,
      marginHorizontal: 10,
      marginVertical: 10,
    }}
    color={theme.colors.white}
    titleStyle={{
      color: theme.colors.primary
    }}
    type={type}
    onPress={onPress}
    />
  )
}