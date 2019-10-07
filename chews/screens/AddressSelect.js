import React, { useState } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  Platform,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { API_KEY } from 'react-native-dotenv'
import { useDispatch } from 'react-redux';
import { addPlace } from '../store/places-actions';

const AddressSelect = props => {
  const [yourAddress, setYourAddress] = useState('');
  const [yourCity, setYourCity] = useState('');
  const [yourState, setYourState] = useState('');

  const dispatch = useDispatch();

  const getLocation = () => {
    yourAddress.trim().replace(' ', '+');
    yourCity.trim().replace(' ', '+');
    yourState.trim().toUpperCase();
    url = `https://maps.googleapis.com/maps/api/geocode/json?address=${yourAddress},
    +${yourCity},+${yourState}&key=${API_KEY}`;

    console.log(url)

    return (
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let coord = {
              lat: data.results[0].geometry.location.lat, 
              lng: data.results[0].geometry.location.lng
              }
            console.log(coord)
            dispatch(addPlace(coord))
            if(coord) {
              props.navigation.replace('Restaurants')
            } 
          }
    )
    )
  }  

  return (
    <View style={styles.screen}>
      <Header title={'Chews'}/>
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
      
      <Button 
        title="Find Restaurants!"
        onPress={getLocation}
      />
    </View>
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
    justifyContent: 'center',
  },
  locationContainer: {
    flex: 1,
    width: '80%',
    marginVertical: 150,
    borderRadius: 10,
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
    fontSize: 25,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 25,
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
  }
});

export default AddressSelect;