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

function Item({ name, onPress, nutrients }) {
  const { theme } = useTheme();
  const values = {};
  const proteinResults = nutrients.filter((obj) => obj.name === 'protein');
  const carbResults = nutrients.filter((obj) => obj.name === 'carbohydrate,bydifference');
  const fatResults = nutrients.filter((obj) => obj.name === 'totallipid(fat)');
  const caloriesResults = nutrients.filter((obj) =>
    obj.name.toLowerCase().includes('energy'.toLowerCase())
  );
  const calciumResults = nutrients.filter((obj) => obj.name === 'calcium');
  const cholineResults = nutrients.filter((obj) => obj.name === 'choline');
  const copperResults = nutrients.filter((obj) => obj.name === 'copper');
  const iodineResults = nutrients.filter((obj) => obj.name === 'iodine');
  const ironResults = nutrients.filter((obj) => obj.name === 'iron');
  const magnesiumResults = nutrients.filter((obj) => obj.name === 'magnesium');
  const phosphorousResults = nutrients.filter((obj) => obj.name === 'phosphorous');
  const potassiumResults = nutrients.filter((obj) => obj.name === 'potassium');
  const seleniumResults = nutrients.filter((obj) => obj.name === 'selenium');
  const sodiumResults = nutrients.filter((obj) => obj.name === 'sodium');
  const zincResults = nutrients.filter((obj) => obj.name === 'zinc');

  const setValues = () => {
    Object.assign(values, { foodName: name, foodID: uuidv4() });
    if (proteinResults.length > 0) {
      Object.assign(values, { proteinGrams: proteinResults[0].value });
    }

    if (carbResults.length > 0) {
      Object.assign(values, { carbGrams: carbResults[0].value });
    }
    if (fatResults.length > 0) {
      Object.assign(values, { fatGrams: fatResults[0].value });
    }
    if (caloriesResults.length > 0) {
      Object.assign(values, { calories: caloriesResults[0].value });
    }
    if (calciumResults.length > 0) {
      Object.assign(values, { calcium: calciumResults[0].value });
    }
    if (cholineResults.length > 0) {
      Object.assign(values, { choline: cholineResults[0].value });
    }
    if (copperResults.length > 0) {
      Object.assign(values, { copper: copperResults[0].value });
    }
    if (iodineResults.length > 0) {
      Object.assign(values, { iodine: iodineResults[0].value });
    }
    if (ironResults.length > 0) {
      Object.assign(values, { iron: ironResults[0].value });
    }
    if (magnesiumResults.length > 0) {
      Object.assign(values, { magnesium: magnesiumResults[0].value });
    }
    if (phosphorousResults.length > 0) {
      Object.assign(values, { phosphorous: phosphorousResults[0].value });
    }
    if (potassiumResults.length > 0) {
      Object.assign(values, { potassium: potassiumResults[0].value });
    }
    if (seleniumResults.length > 0) {
      Object.assign(values, { selenium: seleniumResults[0].value });
    }
    if (sodiumResults.length > 0) {
      Object.assign(values, { sodium: sodiumResults[0].value });
    }
    if (zincResults.length > 0) {
      Object.assign(values, { zinc: zincResults[0].value });
    }
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
        {caloriesResults.length > 0 ? (
          <Text>{caloriesResults[0].value} cal</Text>
        ) : (
          <Text>No cal info</Text>
        )}
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
    // when no input, show all
    if (search === '') {
      return null;
    }
    // filter of the name
    if (item.description.toUpperCase().includes(search.toUpperCase().trim().replace(/\s/g, ''))) {
      const nutrients = [];
      item.foodNutrients.map((nutrient) =>
        nutrients.push({
          name: nutrient.nutrientName.toLowerCase().trim().replace(/\s/g, ''),
          value: nutrient.value,
          unitName: nutrient.unitName,
        })
      );
      return (
        <Item
          name={item.description}
          upc={item.gtinUpc}
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
              onPress={() => navigation.navigate('AddManually', { mealName, dayIndex })}
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
