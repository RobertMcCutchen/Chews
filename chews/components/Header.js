import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: '#d35656',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#f9d5bb',
        fontSize: 36,
    },
})

export default Header;