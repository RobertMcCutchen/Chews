import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Platform,
    FlatList,
} from 'react-native';
import Header from '../components/Header';
import { CATEGORIES } from '../categoryData/data';
import Colors from '../constants/Colors';
import { YELP_API_KEY } from 'react-native-dotenv';
import RestaurantGridTile from '../components/RestaurantGridTile';

const ChosenCuisine = props => {
    const [restaurantData, setRestaurantData] = useState([]);

    const cTitle = props.navigation.getParam('cuisineTitle');
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.yelp.com/v3/businesses/search?term=${cTitle}&latitude=37.786882&longitude=-122.399972`);
    xhr.setRequestHeader("Authorization", `Bearer ${YELP_API_KEY}`);
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
    data = JSON.parse(this.responseText);
    setRestaurantData(data.businesses);
    }
    });
    xhr.send();

    console.log(cTitle)

    const renderRestaurantItem = itemData => {
        return(
          <RestaurantGridTile 
          title={itemData.item.name} 
          imageURL={itemData.item.image_url}
          onSelect={() => {
              }}
          />
        )
    }

    return (
        <View style={styles.screen}>
            <Header title={'Chews'}/>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                data={restaurantData} 
                renderItem={renderRestaurantItem}
                numColumns={1}
            />
        </View>
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

});

export default ChosenCuisine;