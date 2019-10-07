import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import { MAP_API_KEY } from 'react-native-dotenv';


const MapPreview = props => {
    let imagePreviewUrl;

    if (props.latitude && props.longitude) {
        console.log('Map!')
        console.log(props.latitude)
        console.log(props.longitude)
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.latitude},${props.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.latitude},${props.longitude}&key=${MAP_API_KEY}` 
        console.log(imagePreviewUrl)
    }
    return (
        <TouchableOpacity onPress={props.onPress} style={{...styles.mapPreview, ...props.style}}>
            <Image style={styles.mapImage} source={{uri: imagePreviewUrl}}/>
            
            {/* {props.latitude && props.longitude ? (
                <Image style={styles.mapImage} source={{uri: imagePreviewUrl}}/> 
            ) : (props.children)} */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
})

export default MapPreview;