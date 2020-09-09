import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//Compoent
import InfoCard from './Cards/InfoCard';
// Redux
import { connect } from 'react-redux';

const Episodes = props => {
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
        initial: state.episodes.array,
        filtered: state.episodes.filtered,
        error: state.episodes.errorEpiso,
        search: state.episodes.searchEpi
    }
}


export default connect(mapState)(Episodes);