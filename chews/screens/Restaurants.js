import React from 'react';
import { 
  FlatList, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Platform
} from 'react-native';
import Header from '../components/Header';
import { CATEGORIES } from '../categoryData/data';
import Colors from '../constants/Colors';
import CuisineGridTile from '../components/CuisineGridTile';


const Restaurants = props => {
  const renderGridItem = itemData => {
    return (
      <CuisineGridTile 
      title={itemData.item.title} 
      imageURL={itemData.item.imageURL}
      onSelect={() => {
        props.navigation.navigate({
          routeName: 'ChosenCuisine', 
          params: {
            cuisineId: itemData.item.id
          }
        })
      }}
      />
    )
  }
  return (
      <View>
        <Header title={'Chews'} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={3}
      />
      </View>
  );
}

Restaurants.navigationOptions = {
  headerTitle: 'Restaurants',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.color3 : Colors.color1
  },
  headerTintColor: Platform.OS === 'android' ? Colors.color1 : Colors.color3
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Restaurants;