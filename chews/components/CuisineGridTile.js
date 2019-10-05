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

const CuisineGridTile = props => {
    let TouchableOmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Versiom >= 21) {
        TouchableOmp = TouchableNativeFeedback;
    }
    let image = props.imageURL;
   
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
                    />
                    <Text>{props.title}</Text>
                </View>
            </TouchableOmp>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        // backgroundColor: 'red',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    cuisineImage: {
        width: '100%',
        height: '100%',
    }
});

export default CuisineGridTile;