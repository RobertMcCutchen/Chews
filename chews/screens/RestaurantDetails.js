import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import MapPreview from '../components/MapPreview';
import Colors from '../constants/Colors';
import ActivityIndicator from 'react-native'


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
    <View style={styles.screen}>
      <Header title={'Chews'}/>
      <Text>Name: {data.name}</Text>
      <Text>Phone #: {data.phone}</Text>
      <Text>Price: {data.price}</Text>
      <Text>Stars: {data.rating}</Text>
      <Text>Website: {data.url}</Text>
      <Text>Category: {data.categories[0].title}</Text>
      <Text>Ditance: {distance} miles</Text>
      <Text>Address: {data.location.display_address}</Text>
      <MapPreview 
        style={styles.mapPreview} 
        latitude={data.coordinates.latitude} 
        longitude={data.coordinates.longitude}
        onPress={pickOnMapHandler}
      />
      <View style={styles.actions}>
        <Button
          title="Check our Map!"
          color={Colors.color3}
          onPress={pickOnMapHandler}
        >
        </Button>
      </View>
    </View>
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
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 300,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
});

export default RestaurantDetails;