import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
// Component
import Input from './Input';
//Redux
import { connect } from 'react-redux';
import { getCharFiltersAction, removeSearchCharAction } from '../../Redux/Reducers/CharReducer';
import { getEpisodesFiltersAction, removeSearchEpisodeAction } from '../../Redux/Reducers/EpisodeReducer';
import { getLocationsFiltersAction, removeSearchLocationsAction } from '../../Redux/Reducers/LocationReducer';

const Searchbar = ({ title, getCharFiltersAction, getEpisodesFiltersAction, getLocationsFiltersAction,
    removeSearchCharAction, removeSearchEpisodeAction, removeSearchLocationsAction }) => {

    function searchInfo(e) {
        let target = e;
        if (target.length > 2) {
            if (title === 'characters') {
                //search === 'name' ?
                getCharFiltersAction(target, '')    // By name
                //: getCharFiltersAction('', target); // By type
            }
            if (title === 'episodes') {
                getEpisodesFiltersAction(target);
            }
            if (title === 'locations') {
                //search === 'name' ?
                getLocationsFiltersAction(target, '')  // By name
                //: getLocationsFiltersAction('', target); // By type
            }
        }
    }

    return (
        <View style={styles.inputContainer}>
            <Input
                style={styles.input}
                blurOnSubmit
                autoCorrect={false}
                onChangeText={searchInfo}
                placeholder={`Search ${title}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input: {
        width: 250,
        textAlign: 'center',
    }
});

function mapState(state) { return {} }


export default connect(mapState, {
    getCharFiltersAction,
    getEpisodesFiltersAction,
    getLocationsFiltersAction,
    removeSearchCharAction,
    removeSearchEpisodeAction,
    removeSearchLocationsAction
})(Searchbar);