import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = props => {
    const data = props.navigation.getParam('data');
    console.log(data)
    const mapRegion = {
        latitude: data.coordinates.latitude,
        longitude: data.coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    return <MapView 
        style={styles.map} 
        region={mapRegion}
    >
        <Marker></Marker>
    </MapView>
};

const styles= StyleSheet.create({
    map: {
        flex: 1
    }
})

export default MapScreen;