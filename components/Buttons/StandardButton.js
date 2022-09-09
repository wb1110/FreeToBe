import { Button } from "@rneui/themed";

export default function StandardButton(props) {
  const { title, onPress } = props;
  return (
    <Button title={title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 200,
      marginHorizontal: 50,
      marginVertical: 10,
    }}
    onPress={onPress}
    />
  )
}