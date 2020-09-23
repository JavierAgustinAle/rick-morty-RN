import React, { useState } from 'react';
import { View, Switch, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles/SearchBar';

// Component
import Input from './Input';
//Redux
import { connect } from 'react-redux';
import { getCharFiltersAction, removeSearchCharAction } from '../../Redux/Reducers/CharReducer';
import { getEpisodesFiltersAction, removeSearchEpisodeAction } from '../../Redux/Reducers/EpisodeReducer';
import { getLocationsFiltersAction, removeSearchLocationsAction } from '../../Redux/Reducers/LocationReducer';

interface Search {
    title: string;
    getCharFiltersAction: Function;
    getEpisodesFiltersAction: Function;
    getLocationsFiltersAction: Function;
    removeSearchCharAction: Function;
    removeSearchEpisodeAction: Function;
    removeSearchLocationsAction: Function;
}

const Searchbar: React.FC<Search> = ({ title, getCharFiltersAction, getEpisodesFiltersAction, getLocationsFiltersAction,
    removeSearchCharAction, removeSearchEpisodeAction, removeSearchLocationsAction }) => {

    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    const [inputState, setInputState] = useState<string>('');
    const toggleSwitch = (): void => setIsEnabled(previousState => !previousState);

    function searchInfo(e: string): void {
        let target: string = e;
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

    function clearSearch(): void {
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


function mapState(state) { return {} }


export default connect(mapState, {
    getCharFiltersAction,
    getEpisodesFiltersAction,
    getLocationsFiltersAction,
    removeSearchCharAction,
    removeSearchEpisodeAction,
    removeSearchLocationsAction
})(Searchbar);