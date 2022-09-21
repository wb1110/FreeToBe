import { CheckBox } from '@rneui/themed';

function CustomCheckBox(props) {
  const { title, state, setState } = props;
  return <CheckBox center title={title} checked={state} onPress={() => setState(!state)} />;
}

export default CustomCheckBox;
