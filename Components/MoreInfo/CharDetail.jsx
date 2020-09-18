import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Styles/CharDetailStyles';

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



export default CharDetail;