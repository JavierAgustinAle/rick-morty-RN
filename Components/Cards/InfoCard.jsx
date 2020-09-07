import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const InfoCard = ({ name }) => {
    return (
        <View style={styles.card}>
            <Text>Episode o Location</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
        borderRadius: 10
    }
})

export default InfoCard;