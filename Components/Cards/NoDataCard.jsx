import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const NoDataCard = () => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>No data Found</Text>
            <Text style={styles.text}>Sorry, nothing was found, try searching another word.</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: '#B22222',
        padding: 20,
        borderRadius: 10,
        height: 140
    },
    text: {
        color: 'white',
        paddingTop: 5,
        fontSize: 18
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    }
})

export default NoDataCard;