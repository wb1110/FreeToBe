import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';

export default function AddButton(props) {
  const { onPress } = props;
  const { theme } = useTheme();

  return (
    <Ionicons name="add-circle-outline" color={theme.colors.white} size={36} onPress={onPress} />
  );
}
