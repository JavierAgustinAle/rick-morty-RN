import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CharDetail = props => {
    const character = props.navigation.getParam('char');
    return (
        <View style={styles.screen}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.title}>{character.name}</Text>
            <View style={styles.extra}>
                <Text style={styles.text}>{`Gender: ${character.gender}`}</Text>
                <Text style={styles.text}>{`Species: ${character.species}`}</Text>
                {
                    character.type ?
                        <Text style={styles.text}>{`Type: ${character.type}`}</Text>
                        : <Text style={styles.text}>Type: No data</Text>
                }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '70%',
        width: '80%'
    },
    title: {
        fontSize: 28
    },
    extra: {
        paddingVertical: 5
    },
    text: {
        fontSize: 16
    }
});

export default CharDetail;