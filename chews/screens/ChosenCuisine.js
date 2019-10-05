import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Platform
} from 'react-native';
import Header from '../components/Header';
import { CATEGORIES } from '../categoryData/data';
import Colors from '../constants/Colors';

const ChosenCuisine = props => {
    const catId = props.navigation.getParam('cuisineId');

    const selectedCuisine = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <Header title={'Restaurant Detail'}/>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}

ChosenCuisine.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('cuisineId');
    const selectedCuisine = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCuisine.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.color3 : Colors.color1
        },
        headerTintColor: Platform.OS === 'android' ? Colors.color1 : Colors.color3
    }
};

const styles = StyleSheet.create({

});

export default ChosenCuisine;