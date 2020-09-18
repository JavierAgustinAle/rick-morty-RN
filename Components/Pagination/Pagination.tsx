import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './PaginationStyle';
import { AntDesign } from '@expo/vector-icons'
// Redux
import { connect } from 'react-redux';
import { getCharactersAction } from '../../Redux/Reducers/CharReducer';
import { getEpisodesAction } from '../../Redux/Reducers/EpisodeReducer';
import { getLocationsAction } from '../../Redux/Reducers/LocationReducer';


const Pagination = ({ title, charsTotal, episodTotal, locationTotal, charsNext, episodNext,
    locationNext, charsPrev, episodPrev, locationPrev, getCharactersAction, getEpisodesAction,
    getLocationsAction }) => {

    function goToNextPage() {
        switch (title) {
            case 'episodes':
                getEpisodesAction()
                break;
            case 'characters':
                getCharactersAction()
                break;
            case 'locations':
                getLocationsAction()
                break;
            default:
                return false
        }
    }

    function goToPrevPage() {
        switch (title) {
            case 'episodes':
                getEpisodesAction(episodPrev)
                break;
            case 'characters':
                getCharactersAction(charsPrev)
                break;
            case 'locations':
                getLocationsAction(locationPrev)
                break;
            default:
                return false
        }
    }


    return (
        <View style={styles.inputContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={goToPrevPage}>
                    <View style={styles.button}>
                        <Text><AntDesign name="caretleft" size={22} color="black" /></Text>
                    </View>
                </TouchableOpacity>
                {
                    title === 'characters' ?
                        <View style={styles.button}>
                            <Text>{`${charsNext != null ? charsNext - 1 : charsTotal} of ${charsTotal}`}</Text>
                        </View>
                        : title === 'episodes' ?
                            <View style={styles.button}>
                                <Text>{`${episodNext != null ? episodNext - 1 : episodTotal} of ${episodTotal}`}</Text>
                            </View>
                            : <View style={styles.button}>
                                <Text> {`${locationNext != null ? locationNext - 1 : locationTotal} of ${locationTotal}`}</Text>
                            </View>
                }
                <TouchableOpacity onPress={goToNextPage}>
                    <View style={styles.button}>
                        <Text><AntDesign name="caretright" size={22} color="black" /></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
};


function mapState(state) {
    return {
        charsTotal: state.characters.totalPages,
        episodTotal: state.episodes.totalPagesEpisod,
        locationTotal: state.locations.totalPagesLoca,

        charsNext: state.characters.nextPage,
        episodNext: state.episodes.nextPageEpisod,
        locationNext: state.locations.nextPageLoca,

        charsPrev: state.characters.prevPage,
        episodPrev: state.episodes.prevPageEpisod,
        locationPrev: state.locations.prevPageLoca,

    }
}

export default connect(mapState, { getCharactersAction, getEpisodesAction, getLocationsAction })(Pagination);