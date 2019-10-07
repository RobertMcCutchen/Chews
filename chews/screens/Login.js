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
import Colors from '../constants/Colors';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.inputContainer}>
        <View style={styles.anInput}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.anInput}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
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

Login.navigationOptions = {
  headerTitle: 'Login',
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
  inputContainer: {
    flex: 1,
    width: '80%',
    marginVertical: 125,
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
    fontSize: 30,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 25,
  }
});

export default Login;