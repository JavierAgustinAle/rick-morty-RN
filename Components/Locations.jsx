import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//Compoent
import InfoCard from './Cards/InfoCard';
// Redux
import { connect } from 'react-redux';

const Locations = props => {

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
        <FlatList data={props.initial} renderItem={renderGridItem} numColumns={2} />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})

function mapState(state) {
    return {
        initial: state.locations.array,
        filtered: state.locations.filtered,
        error: state.locations.errorLoc,
        search: state.locations.searchLoc
    }
}

export default connect(mapState)(Locations);