import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet,
    Platform,
    ImageBackground,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const RestaurantGridTile = props => {
    let TouchableOmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Versiom >= 21) {
        TouchableOmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableOmp
                style={{flex: 1}}
                onPress={props.onSelect}
            >   
                <View style={styles.container}>
                    <ImageBackground 
                        source={{uri: props.imageURL}}
                        style={styles.cuisineImage}
                    >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOmp>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: Colors.color2,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    cuisineImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderRadius: 10,
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 2,
        paddingHorizontal: 2,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
});

export default RestaurantGridTile;