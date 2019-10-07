import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './navigation/Navigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from './store/places-reducer';

const store = createStore(Reducer, composeWithDevTools());

const fetchFonts = () => {
  return Font-Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

fetchFonts()

export default function App() {

  return (
    <Provider store={store}>
      <Navigator style={styles.screen}/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
