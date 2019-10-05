import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const Login = props => {
  return (
    <View style={styles.screen}>
      <Header title={'Login'}/>
      <Button 
        title="Log me in!"
        onPress={() => {
          props.navigation.replace('AddressSelect')
        }}
      />
      <Text>Not yet signed up?</Text>
      <Button 
        title="Signup"
        onPress={() => {
          props.navigation.replace('Signup')
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

export default Login;