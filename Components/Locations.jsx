import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './Styles/LocationsStyle';
//Compoent
import InfoCard from './Cards/InfoCard';
import SearchBar from './Search/SearchBar';
import Pagination from './Pagination/Pagination';
import NoDataCard from './Cards/NoDataCard';

// Redux
import { connect } from 'react-redux';

const Locations = props => {
    const title = 'locations';

    function goToLocation(itemData) {
        props.navigation.navigate({
            routeName: 'Location', params: {
                location: itemData.item
            }
        })
    }

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => goToLocation(itemData)}>
                <View >
                    <InfoCard title='location' data={itemData.item} />
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
                    <FlatList data={props.filteredLoc.length > 0 ? props.filteredLoc : props.initial}
                        renderItem={renderGridItem} numColumns={2} keyExtractor={item => item.id} />
                    : <View style={styles.noData}><NoDataCard /></View>
            }

            {
                props.error === false && props.filteredLoc.length < 1 ?
                    <View style={styles.center}>
                        <Pagination title={title} />
                    </View>
                    : null

            }
        </View>
    )
}

function mapState(state) {
    return {
        initial: state.locations.array,
        filteredLoc: state.locations.filteredLoc,
        error: state.locations.errorLoc,
        search: state.locations.searchLoc
    }
}

export default connect(mapState)(Locations);