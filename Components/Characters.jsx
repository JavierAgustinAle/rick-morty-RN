import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// Components
import CharCard from './Cards/CharCard';
import SearchBar from './Search/SearchBar';
// Redux
import { connect } from 'react-redux';

const Characters = props => {
    const title = 'characters';

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Character', params: {
                        char: itemData.item
                    }
                })
            }}>
                <View >
                    <CharCard name={itemData.item.name}
                        image={itemData.item.image} />
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
        initial: state.characters.array,
        filtered: state.characters.filtered,
        error: state.characters.error,
        search: state.characters.search
    }
}

export default connect(mapState)(Characters);