import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Signup = props => {
  return (
    <View style={styles.screen}>
      <Header title={'Signup'}/>
      <Button title="Sign me up!"/>
      <Text>Already signed up?</Text>
      <Button 
        title="Login"
        onPress={() => {
          props.navigation.replace('Login')
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

export default Signup;