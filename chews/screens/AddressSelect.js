import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const AddressSelect = props => {
  return (
    <View style={styles.screen}>
      <Header title={'Select Address'}/>
      <Button 
        title="Find Restaurants!"
        onPress={() => {
          props.navigation.navigate('Restaurants')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddressSelect;