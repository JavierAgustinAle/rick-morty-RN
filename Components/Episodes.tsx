import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './Styles/EpisodesStyle';
//Compoent
import InfoCard from './Cards/InfoCard';
import SearchBar from './Search/SearchBar';
import Pagination from './Pagination/Pagination';
import NoDataCard from './Cards/NoDataCard';

// Redux
import { connect } from 'react-redux';

const Episodes: React.FC<any> = props => {

    const title: string = 'episodes';

    function goToEpisode(itemData): void {
        props.navigation.navigate({
            routeName: 'Episode', params: {
                episode: itemData.item
            }
        })
    }

    const renderGridItem = itemData => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => goToEpisode(itemData)}>
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
                    <FlatList data={props.filteredEpi.length > 0 ? props.filteredEpi : props.initial}
                        renderItem={renderGridItem} numColumns={2} keyExtractor={item => item.id} />
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

function mapState(state: any) {
    return {
        initial: state.episodes.array,
        filteredEpi: state.episodes.filteredEpi,
        error: state.episodes.errorEpiso,
        search: state.episodes.searchEpi
    }
}


export default connect(mapState)(Episodes);