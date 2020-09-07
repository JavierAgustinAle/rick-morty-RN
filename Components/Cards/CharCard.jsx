import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const CharCard = ({ name }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }} style={styles.image} />
            
            </View>
            <View style={styles.card}>

                <Text>{name}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        shadowColor: 'black',   // IOS
        shadowOffset: {         // IOS
            width: 0,
            height: 2
        },
        shadowRadius: 6,        // IOS
        shadowOpacity: 0.26,    // IOS
        elevation: 5,           //Para hacer la card en android
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    imageContainer: {
        width: '80%',
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 25,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default CharCard;