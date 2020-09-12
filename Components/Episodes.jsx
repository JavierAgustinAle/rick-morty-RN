import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//Compoent
import InfoCard from './Cards/InfoCard';
import SearchBar from './Search/SearchBar';
import Pagination from './Pagination/Pagination';
import NoDataCard from './Cards/NoDataCard';

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
            <View style={styles.center}>
                <SearchBar title={title} />
            </View>
            {
                props.error === false ?
                    <FlatList data={props.filteredEpi.length > 0 ? props.filteredEpi : props.initial} renderItem={renderGridItem} numColumns={2} />
                    : <View style={styles.noData}><NoDataCard /></View>
            }
            {
                props.error === false && props.filteredEpi.length < 1 ?
                    <View style={styles.center}>
                        <Pagination title={title} />
                    </View>
                    : null

            }
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
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    noData: {
        paddingHorizontal: 35,
        paddingTop: 50
    }
})

function mapState(state) {
    return {
        initial: state.episodes.array,
        filteredEpi: state.episodes.filteredEpi,
        error: state.episodes.errorEpiso,
        search: state.episodes.searchEpi
    }
}


export default connect(mapState)(Episodes);