import React from 'react';
import { View, StyleSheet } from 'react-native';
// Components
import CharCard from './Cards/CharCard';

const Characters = () => {
    return (
        <View style={styles.screen}>
            <CharCard name="JAvier" />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
})

export default Characters;