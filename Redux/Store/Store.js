import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import CharReducer, { getCharactersAction } from '../Reducers/CharReducer';
import LocationReducer, { getLocationsAction } from '../Reducers/LocationReducer';
import EpisodeReducer, { getEpisodesAction } from '../Reducers/EpisodeReducer';



let rootReducer = combineReducers({
    characters: CharReducer,
    locations: LocationReducer,
    episodes: EpisodeReducer
})

export default function generateStore() {
    let store = createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    )
    getCharactersAction()(store.dispatch, store.getState)
    getLocationsAction()(store.dispatch, store.getState)
    getEpisodesAction()(store.dispatch, store.getState)
    return store;
}