import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//Compoent
import InfoCard from './Cards/InfoCard';
import SearchBar from './Search/SearchBar';
// Redux
import { connect } from 'react-redux';

const Locations = props => {
    const title = 'locations';
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'Location', params: {
                        location: itemData.item
                    }
                })
            }}>
                <View >
                    <InfoCard title='location' data={itemData.item} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.screen}>
            <View style={styles.searchBar}>
                <SearchBar title={title} />
            </View>
            <FlatList data={props.filteredLoc.length > 0 ? props.filteredLoc : props.initial} renderItem={renderGridItem} numColumns={2} />
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
        initial: state.locations.array,
        filteredLoc: state.locations.filteredLoc,
        error: state.locations.errorLoc,
        search: state.locations.searchLoc
    }
}

export default connect(mapState)(Locations);