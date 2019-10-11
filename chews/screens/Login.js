import React, { useState } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  Platform,
  TextInput,
  Alert
} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    axios.post('http://localhost:5433/login', {
        username: username,
        password: password
    }).then(response => {
        console.log(response.data)
        if(response.data){
          props.navigation.replace('AddressSelect')
        } else {
          console.log ('No good!')
          Alert.alert(
            'Please enter a valid username and password.', 
          )
        }
    })
  }

  return (
    <LinearGradient colors={['violet', 'orange']} style={styles.gradient}>
    <View style={styles.screen}>
      <Header />
      <View style={styles.inputContainer}>
        <View style={styles.anInput}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            id="username"
            label="Username"
            style={styles.input}
            required
            autoCapitalize="none"
            keyboardType="default"
            errorText="Please enter a valid username."
            initialValue=""
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.anInput}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            id="password"
            label="Password"
            style={styles.input}
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            keyboardType="default"
            errorText="Please enter a valid password."
            initialValue=""
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <Button 
        title="Log me in!"
        onPress={() => {
          handleLogin()
        }}
      />
      <Text>Not yet signed up?</Text>
      <Button
        style={styles.button} 
        title="Signup"
        onPress={() => {
          handleLogin()
          props.navigation.replace('Signup')
        }}
      />
    </View>
    </LinearGradient>
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
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  inputContainer: {
    flex: 1,
    width: '80%',
    maxHeight: 250,
    marginTop: 100,
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
    color: "indigo",
  },
  gradient: {
    width: '100%',
    height: '100%'
  },
  button: {
    fontSize: 30,
  }
});

export default Login;