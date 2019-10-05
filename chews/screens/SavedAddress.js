import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function SavedAddress() {
  return (
    <View style={styles.screen}>
      <Header title={'Chews'}/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});