import React, { useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Component
import Input from './Input';
//Redux
import { connect } from 'react-redux';
import { getCharFiltersAction, removeSearchCharAction } from '../../Redux/Reducers/CharReducer';
import { getEpisodesFiltersAction, removeSearchEpisodeAction } from '../../Redux/Reducers/EpisodeReducer';
import { getLocationsFiltersAction, removeSearchLocationsAction } from '../../Redux/Reducers/LocationReducer';


const Searchbar = ({ title, getCharFiltersAction, getEpisodesFiltersAction, getLocationsFiltersAction,
    removeSearchCharAction, removeSearchEpisodeAction, removeSearchLocationsAction }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [inputState, setInputState] = useState('');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function searchInfo(e) {
        let target = e;
        setInputState(target)
        if (target.length > 2) {
            if (title === 'characters') {
                !isEnabled ?
                    getCharFiltersAction(target, '')    // By name
                    : getCharFiltersAction('', target); // By type
            }
            if (title === 'episodes') {
                getEpisodesFiltersAction(target);
            }
            if (title === 'locations') {
                !isEnabled ?
                    getLocationsFiltersAction(target, '')  // By name
                    : getLocationsFiltersAction('', target); // By type
            }
        }
    }

    function clearSearch() {
        if (title === 'characters') {
            removeSearchCharAction();
        }
        if (title === 'episodes') {
            removeSearchEpisodeAction();
        }
        if (title === 'locations') {
            removeSearchLocationsAction();
        }
        setInputState('')
    }

    return (
        <View style={styles.inputContainer}>
            <View style={styles.barContainer}>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCorrect={false}
                    onChangeText={searchInfo}
                    placeholder={`Search ${title}`}
                    value={inputState}
                />
                <TouchableOpacity onPress={clearSearch}>
                    <View style={styles.button}>
                        <Text><Ionicons name='ios-close-circle' size={22} color='red' /></Text>
                    </View>
                </TouchableOpacity>

            </View>

            {
                title !== 'episodes' && <View>
                    <Text>{!isEnabled ? `By Name` : `By Type`}</Text>
                    <Switch
                        trackColor={{ false: "#a8111b", true: "#81b0ff" }}
                        thumbColor="#f5dd4b"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    barContainer: {
        flexDirection: 'row'
    },
    input: {
        width: 200,
        textAlign: 'center',
    },
    button: {
        width: 30,
        paddingTop: 12
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