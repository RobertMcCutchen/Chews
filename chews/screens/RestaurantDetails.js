import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import MapPreview from '../components/MapPreview';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import axios from 'axios';

const RestaurantDetails = props => {
  const data = props.navigation.getParam('data');
  const distance = Math.round((data.distance)/1609.33) 

  const pickOnMapHandler = () => {
    console.log('Map Success!')
    props.navigation.navigate({
      routeName: 'Map', 
      params: {
        data: data
      }})
  };

  return (
    <LinearGradient colors={['violet', 'orange']} style={styles.gradient}>
    <View style={styles.screen}>
      <Header/>
      <View style={styles.restaurantInfo}>
        <Text style={styles.detail}>Name: {data.name}</Text>
        <Text style={styles.detail}>Phone #: {data.phone}</Text>
        <Text style={styles.detail}>Price: {data.price}</Text>
        <Text style={styles.detail}>Stars: {data.rating}</Text>
        {/* <Text style={styles.detail}>Website: {data.url}</Text> */}
        <Text style={styles.detail}>Category: {data.categories[0].title}</Text>
        <Text style={styles.detail}>Distance: {distance} miles</Text>
        <Text style={styles.detail}>Address: {data.location.display_address}</Text>
      </View>
      <MapPreview 
        style={styles.mapPreview} 
        latitude={data.coordinates.latitude} 
        longitude={data.coordinates.longitude}
        onPress={pickOnMapHandler}
      />
      <View style={styles.actions}>
        <CustomButton
          style={styles.button}
          onPress={pickOnMapHandler}
        >
          Check our Map!
        </CustomButton>
      </View>
    </View>
    </LinearGradient>
  );
}

RestaurantDetails.navigationOptions = {
  headerTitle: 'Restaurant Info',
  headerRight: (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                  title='Favorite'
                  iconName='ios-heart'
                  onPress={() => {
                    axios.post('http://localhost:5433/favorite', {
                      data: data
                    })
                  }}
                />
              </HeaderButtons>
              ),
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.color3 : Colors.color1
  },
  headerTintColor: Platform.OS === 'android' ? Colors.color1 : Colors.color3
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantInfo: {
    marginHorizontal: 10,
    height: '35%',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  detail: {
    font: 'open-sans',
    fontSize: 20,
    paddingHorizontal: 5,
  },
  mapPreview: {
    width: '100%',
    height: 250,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default RestaurantDetails;