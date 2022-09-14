import { CheckBox } from "@rneui/themed";
import { useState } from 'react';

function SingleSelectCheck(props) {
  const { title, checked, onPress } = props;
  return (
      <CheckBox center title={title} checked={checked} onPress={onPress}/>
  )
}

export default SingleSelectCheck