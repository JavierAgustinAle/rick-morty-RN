import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Styles/EpisodeDetailStyles';

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
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}



export default EpisodeDetail;