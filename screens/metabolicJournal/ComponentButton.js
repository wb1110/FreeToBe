import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

function ComponentButton({ buttonTitle, buttonIcon, metabolicData, setMetabolicData }) {
  const [selected, setSelected] = useState(false);

  const handleAddItem = (value) => {
    setSelected(!selected);
    if (metabolicData.mood.includes(value)) {
      const removedItemArray = metabolicData.mood.filter((item) => item !== value);
      setMetabolicData({
        ...metabolicData,
        mood: removedItemArray,
      });
    } else {
      setMetabolicData({
        ...metabolicData,
        mood: [...metabolicData.mood, value],
      });
    }
  };
  const changeDisplay = () => {
    if (selected) {
      return 'flex';
    }
    return 'none';
  };

  return (
    <TouchableOpacity
      onPress={() => handleAddItem(buttonTitle)}
      style={{ alignItems: 'center', marginLeft: '2%', width: 80, height: 90 }}
    >
      <View>
        {buttonIcon}
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            backgroundColor: 'green',
            borderRadius: 20,
            display: changeDisplay(),
          }}
        >
          <FontAwesome5 name="check-circle" size={24} color="white" />
        </View>
      </View>
      <Text style={{ textAlign: 'center' }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default ComponentButton;
