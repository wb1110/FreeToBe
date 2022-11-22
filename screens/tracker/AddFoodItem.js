import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { SearchBar, Text, useTheme } from '@rneui/themed';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddButton from '../../components/Buttons/AddButton';
import useTrackerStore from '../../state/TrackerStore';
import FoodScanner from '../foodScanner/FoodScanner';

function Item({ name, calories, onPress, nutrients }) {
  const { theme } = useTheme();
  const values = {};
  const nutrientIdsArray = [
    { id: 1003, name: 'protein' },
    { id: 1005, name: 'carbs' },
    { id: 1004, name: 'fat' },
    { id: 1008, name: 'calories' },
    { id: 1087, name: 'calcium' },
    { id: 1098, name: 'copper' },
    { id: 1180, name: 'choline' },
    { id: 1100, name: 'iodine' },
    { id: 1090, name: 'magnesium' },
    { id: 1091, name: 'phosphorous' },
    { id: 1092, name: 'potassium' },
    { id: 1103, name: 'selenium' },
    { id: 1093, name: 'sodium' },
    { id: 1095, name: 'zinc' },
  ];

  function nutrientFilter(nutrientsArray, nutrientId, nutrientName) {
    const results = nutrientsArray.filter((obj) => obj.nutrientId === nutrientId);
    if (results.length > 0) {
      const property = nutrientName;
      Object.assign(values, { [property]: results[0].value });
    }
  }

  const setValues = () => {
    Object.assign(values, { foodName: name, foodID: uuidv4() });
    nutrientIdsArray.map((nutrient) => nutrientFilter(nutrients, nutrient.id, nutrient.name));
  };

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        padding: '1%',
        marginVertical: '1%',
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ width: '90%' }}>
        <Text>{name}</Text>
        <Text>{calories} cal</Text>
      </View>
      <AddButton
        onPress={() => {
          setValues();
          onPress(values);
        }}
      />
    </View>
  );
}

export default function AddFoodItem({ route, navigation }) {
  const state = useTrackerStore();
  const { dayIndex, mealName } = route.params;
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [usedBarcode, setUsedBarcode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchData = setTimeout(() => {
      axios
        .get(
          `https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&dataType=Foundation&pageSize=50&sortBy=lowercaseDescription.keyword&sortOrder=asc&api_key=QGFVnH9V6cq73KFQNwa5ckdhM1dIbifXkZx7rFzZ`
        )
        .then((res) => {
          setData(res.data.foods);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => clearTimeout(searchData);
  }, [search]);

  const scanData = (value) => {
    axios
      .get(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${value}&pageSize=10&api_key=QGFVnH9V6cq73KFQNwa5ckdhM1dIbifXkZx7rFzZ`
      )
      .then((res) => {
        setUsedBarcode(true);
        setData(res.data.foods);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const addNewFood = (foodValues) => {
    state.addFood(foodValues, dayIndex, mealName);
    navigation.navigate('TrackerHome');
  };

  // eslint-disable-next-line consistent-return
  const renderItem = ({ item }) => {
    // when no input, show nothing
    if (search === '' && usedBarcode === false) {
      return null;
    }
    // filter of the name
    if (item.description.toUpperCase().includes(search.toUpperCase().trim().replace(/\s/g, ''))) {
      const nutrients = [];
      let calories = 0;
      item.foodNutrients.map((nutrient) => {
        nutrients.push({
          nutrientId: nutrient.nutrientId,
          name: nutrient.nutrientName,
          value: nutrient.value,
          unitName: nutrient.unitName,
        });
        if (nutrient.nutrientId === 1008) {
          calories = nutrient.value;
        }
        return calories;
      });
      return (
        <Item
          name={item.description}
          calories={calories}
          onPress={addNewFood}
          nutrients={nutrients}
        />
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={{ alignItems: 'center' }}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            inputContainerStyle={{ backgroundColor: 'white' }}
            containerStyle={{
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
              width: '100%',
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: '2%',
                alignItems: 'center',
                margin: '2%',
                width: 125,
              }}
              onPress={() => setModalOpen(true)}
            >
              <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
              <Text style={{ color: 'black' }}>Scan Barcode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: '2%',
                alignItems: 'center',
                margin: '2%',
                width: 125,
              }}
              onPress={() => navigation.navigate('AddFoodManually', { mealName, dayIndex })}
            >
              <MaterialIcons name="post-add" size={24} color="black" />
              <Text style={{ color: 'black' }}>Manual Add</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.fdcId} />
        <FoodScanner scanData={scanData} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </View>
    </TouchableWithoutFeedback>
  );
}
