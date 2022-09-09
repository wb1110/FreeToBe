import { Button } from "@rneui/themed";

export default function StandardButton(props) {
  const { title, onPress, type } = props;
  return (
    <Button title={title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 200,
      marginHorizontal: 10,
      marginVertical: 10,
    }}
    type={type}
    onPress={onPress}
    />
  )
}