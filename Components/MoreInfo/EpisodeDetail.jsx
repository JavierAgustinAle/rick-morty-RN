import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// Compoent
import CharCard from '../Cards/CharCard';

const EpisodeDetail = props => {
    const episode = props.navigation.getParam('episode');
    const renderGridItem = itemData => {
        return (
            <View style={styles.gridItem}>
                <CharCard name={itemData.item.name}
                    image={itemData.item.image} />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{episode.name}</Text>
            <View style={styles.extra}>
                <Text style={styles.text}>{`Release: ${episode.air_date}`}</Text>
                <Text style={styles.text}>{`Episode: ${episode.episode}`}</Text>
            </View>
            <View>
                <Text style={styles.characters}>Characters</Text>
                <FlatList
                    data={episode.characters}
                    renderItem={renderGridItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 15,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 100
    },
    title: {
        fontSize: 28
    },
    extra: {
        paddingVertical: 5
    },
    text: {
        fontSize: 16
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    characters: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 20
    }
});

export default EpisodeDetail;