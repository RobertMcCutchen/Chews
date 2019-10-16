import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    View,
    Platform,
    FlatList,
} from 'react-native';
import Header from '../components/Header';
import { CATEGORIES } from '../categoryData/data';
import Colors from '../constants/Colors';
import { API_KEY2 } from 'react-native-dotenv';
import RestaurantGridTile from '../components/RestaurantGridTile';
import { LinearGradient } from 'expo-linear-gradient';

const ChosenCuisine = props => {
    const [restaurantData, setRestaurantData] = useState([]);
    
    useEffect(() => {
    const cTitle = props.navigation.getParam('cuisineTitle'); 
    const latitude = props.navigation.getParam('lat');
    const longitude = props.navigation.getParam('lng');
  
    let url = `https://api.yelp.com/v3/businesses/search?term=${cTitle}&latitude=${latitude}&longitude=${longitude}`
    console.log(url)
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", `application/json`);
    xhr.setRequestHeader("Authorization", `Bearer oO5SJK-REGZK7jbb8tK_C_Sfs2RSE-ZxhZickX5C1GF60u6jUVOUBK-xSpvXFH1J-g-RLigwi6J-trzlyYCCIOugfpq35MBgh4elwpH_De3pJ7khEQsE1iQbpX-XXXYx`);
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
    data = JSON.parse(this.responseText);
    setRestaurantData(data.businesses);
    }
    });
    xhr.send();

    }, [])
    

    

    const renderRestaurantItem = itemData => {
        return(
            <RestaurantGridTile 
            title={itemData.item.name} 
            imageURL={itemData.item.image_url}
            id={itemData.item.id}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'RestaurantDetails', 
                    params: {
                        data: itemData.item
                    }
            })}}
          />
        )
    }

    return (
        <LinearGradient colors={['violet', 'orange']} style={styles.gradient}>
         <Header />
        <View style={styles.screen}>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={restaurantData} 
                renderItem={renderRestaurantItem}
                numColumns={1}
            />
        </View>
        </LinearGradient>
    );
}

ChosenCuisine.navigationOptions = (navigationData) => {
    const catId2= navigationData.navigation.getParam('cuisineId');
    const selectedCuisine = CATEGORIES.find(cat => cat.id === catId2)
    return {
        headerTitle: selectedCuisine.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.color3 : Colors.color1
        },
        headerTintColor: Platform.OS === 'android' ? Colors.color1 : Colors.color3
    }
};

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: '100%'
    }
});

// export default connect(mapStateToProps)(ChosenCuisine);
export default ChosenCuisine;