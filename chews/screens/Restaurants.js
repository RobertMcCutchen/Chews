import React, { useState } from 'react';
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

  const latitude = props.navigation.getParam('lat');
  const longitude = props.navigation.getParam('lng');
  
  console.log('success!')
  console.log(latitude)
  console.log(longitude)

  const renderGridItem = itemData => {
    return(
      <CuisineGridTile 
      title={itemData.item.title} 
      imageURL={itemData.item.imageURL}
      onSelect={() => {
        props.navigation.navigate({
          routeName: 'ChosenCuisine', 
          params: {
            cuisineId: itemData.item.id,
            cuisineTitle: itemData.item.title,
            lat: latitude,
            lng: longitude
          }
        })
      }}
      />
    )
  }
 
  return (
      <View style={styles.container}>
        <Header title={'Chews'} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={1}
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
  container: {
    paddingBottom: 50,
  }
});

export default Restaurants;