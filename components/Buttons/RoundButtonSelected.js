import { Button, useTheme } from "@rneui/themed";

export default function RoundButtonSelected(props) {
  const { theme } = useTheme();
  const { title, type, onPress } = props;
  return (
    <Button title={title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
      borderColor: theme.colors.white
    }}
    containerStyle={{
      width: 45,
      marginHorizontal: 5,
      marginVertical: 10,
    }}
    color={theme.colors.white}
    titleStyle={{
      color: theme.colors.primary
    }}
    onPress={onPress}
    />
  )
}