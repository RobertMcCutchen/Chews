import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import MapPreview from '../components/MapPreview';
import Colors from '../constants/Colors';
import ActivityIndicator from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


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
        <Text style={styles.detail}>Ditance: {distance} miles</Text>
        <Text style={styles.detail}>Address: {data.location.display_address}</Text>
      </View>
      <MapPreview 
        style={styles.mapPreview} 
        latitude={data.coordinates.latitude} 
        longitude={data.coordinates.longitude}
        onPress={pickOnMapHandler}
      />
      <View style={styles.actions}>
        <Button
          style={styles.button}
          title="Check our Map!"
          onPress={pickOnMapHandler}
        >
        </Button>
      </View>
    </View>
    </LinearGradient>
  );
}

RestaurantDetails.navigationOptions = {
  headerTitle: 'Restaurant Info',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.color3 : Colors.color1
  },
  headerTintColor: Platform.OS === 'android' ? Colors.color1 : Colors.color3
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantInfo: {
    margin: 10,
    height: '35%',
    width: '90%',
    backgroundColor: 'white',
  },
  detail: {
    font: 'open-sans',
    fontSize: 20,
    paddingHorizontal: 5,
  },
  mapPreview: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    height: 250,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    fontSize: 30,
  }
});

export default RestaurantDetails;