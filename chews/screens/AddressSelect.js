import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Platform,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { API_KEY2 } from 'react-native-dotenv'
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../components/CustomButton';

const AddressSelect = props => {
  const [yourAddress, setYourAddress] = useState('');
  const [yourCity, setYourCity] = useState('');
  const [yourState, setYourState] = useState('');

  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('')

  const dispatchLocation = () => {
    yourAddress.trim().replace(' ', '+');
    yourCity.trim().replace(' ', '+');
    yourState.trim().toUpperCase();
    url = `https://maps.googleapis.com/maps/api/geocode/json?address=${yourAddress},
    +${yourCity},+${yourState}&key=AIzaSyD5Hk4s6zbTgXLPC-UYMLRmLFrxqJy0MGY`;

    console.log(url)

    return (
        fetch(url)
        .then(response => response.json())
        .then(data => {
              const latitude = data.results[0].geometry.location.lat;
              console.log(latitude)
              setLat(latitude)
              const longitude = data.results[0].geometry.location.lng;
              setLng(longitude)
              props.navigation.replace({
                routeName: 'Restaurants', 
                params: {lat: latitude, lng: longitude}
            })
        })
     
    )
  }  

  return (
    <LinearGradient colors={['violet', 'orange']} style={styles.gradient}>
    <View style={styles.screen}>
      <Header />
      <View style={styles.locationContainer}>
        <Text style={styles.label}>Enter your location:</Text>
        <View style={styles.anInput}>
          <Text style={styles.label}>Address</Text>
          <TextInput 
            style={styles.input}
            onChangeText={text => setYourAddress(text)}
          />
        </View>
        <View style={styles.cityStateContainer}>
          <View style={styles.cityInput}>
            <Text style={styles.label}>City</Text>
            <TextInput 
              style={styles.input}
              onChangeText={text => setYourCity(text)}
            />
          </View>
          <View style={styles.stateInput}>
            <Text style={styles.label}>State</Text>
            <TextInput 
              style={styles.input} 
              maxLength={2}
              onChangeText={text => setYourState(text)}
            />
          </View>
        </View>
      </View>
      <CustomButton 
        onPress={dispatchLocation}
      >
        Find Restaurants!
      </CustomButton>
    </View>
    </LinearGradient>
  );
}

AddressSelect.navigationOptions = {
  headerTitle: 'Select Address',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.color3 : Colors.color1
  },
  headerTintColor: Platform.OS === 'android' ? Colors.color1 : Colors.color3
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  locationContainer: {
    flex: 1,
    width: '80%',
    maxHeight: 200,
    borderRadius: 5,
    backgroundColor: Colors.color2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  anInput: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    fontSize: 30,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 25,
    color: 'indigo',
    font: 'open-sans-bold',
  },
  cityStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  cityInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  stateInput: {
    width: '24%',
  },
  gradient: {
    width: '100%',
    height: '100%'
  },
});

export default AddressSelect;