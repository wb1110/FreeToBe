import { CheckBox } from "@rneui/themed";
import { useState } from 'react';

function CustomCheckBox(props) {
  const [check, setCheck] = useState(false);
  const { title, checked } = props;
  return (
      <CheckBox center title={title} checked={check} onPress={() => setCheck(!check)}/>
  )
}

export default CustomCheckBox