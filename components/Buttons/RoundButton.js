import { Button } from "@rneui/themed";

export default function RoundButton(props) {
  const { title, type, onPress } = props;
  return (
    <Button title={title} buttonStyle={{
      borderWidth: 2,
      borderRadius: 30,
    }}
    containerStyle={{
      width: 45,
      marginHorizontal: 10,
      marginVertical: 10,
    }} 
    type={type}
    onPress={onPress}
    />
  )
}