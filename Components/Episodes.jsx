import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//Compoent
import InfoCard from './Cards/InfoCard';
import SearchBar from './Search/SearchBar';
// Redux
import { connect } from 'react-redux';

const Episodes = props => {
    const title = 'episodes';
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Episode', params: {
                        episode: itemData.item
                    }
                })
            }}>
                <View >
                    <InfoCard title='episode' data={itemData.item} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.searchBar}>
                <SearchBar title={title} />
            </View>
            <FlatList data={props.filtered.length > 0 ? props.filtered : props.initial} renderItem={renderGridItem} numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    searchBar: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapState(state) {
    return {
        initial: state.episodes.array,
        filtered: state.episodes.filtered,
        error: state.episodes.errorEpiso,
        search: state.episodes.searchEpi
    }
}


export default connect(mapState)(Episodes);