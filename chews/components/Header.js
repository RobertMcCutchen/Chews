import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Chews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        paddingVertical: 7,
        backgroundColor: Colors.color2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'indigo',
        fontSize: 36,
        font: 'open-sans-bold',
    },
})

export default Header;