import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export default function LArrowButton(props) {
  const { onPress } = props;
  const { theme } = useTheme();

  return (
      <Ionicons name="arrow-back-circle" color={theme.colors.white} size={48} onPress={onPress}/>
  )
};