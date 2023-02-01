import { Text } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

function OvulationButtons({ buttonTitle, buttonIcon, metabolicData, setMetabolicData }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (metabolicData.fertility !== undefined) {
      if (metabolicData.fertility.ovulation === buttonTitle) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metabolicData]);

  const handleAddItem = (value) => {
    setSelected(!selected);
    setMetabolicData({
      ...metabolicData,
      fertility: {
        ...metabolicData.fertility,
        ovulation: value,
      },
    });
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

export default OvulationButtons;
