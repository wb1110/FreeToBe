import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export default function RArrowButton(props) {
  const { onPress } = props;
  const { theme } = useTheme();

  return (
      <Ionicons name="arrow-forward-circle" color={theme.colors.white} size={48} onPress={onPress}/>
  )
};