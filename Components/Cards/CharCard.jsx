import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const CharCard = props => {
    return (
        <View style={styles.mealItem}>
            <View>
                <View style={styles.mealRow}>
                    <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: '100%',
        width: '100%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 10
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row',
        height: '100%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center'
    }
})

export default CharCard;