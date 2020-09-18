import {
    GET_EPISODES, GET_EPISODES_SUCCESS, GET_EPISODES_ERROR,
    GET_FILTERS_EPISODES, GET_FILTERS_EPISODES_ERROR, GET_FILTERS_EPISODES_SUCCESS, REMOVE_FILTERED_EPISODE,
    UPDATE_PAGE_EPISODE, SET_SEARCH_EP
} from '../Actions/EpisodeActions';
// Apollo
import { gql } from "apollo-boost"
// Client
import { client } from '../ApolloClient';

let initialData = {
    fetching: false,
    array: [],
    filteredEpi: [],
    searchEpi: '',
    nextPageEpisod: 1,
    prevPageEpisod: 0,
    totalPagesEpisod: 0,
    errorEpiso: false
}


// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_EPISODES:
            return { ...state, fetching: true }
        case GET_EPISODES_ERROR:
            return { ...state, fetching: false, errorEpiso: action.payload }
        case GET_EPISODES_SUCCESS:
            return { ...state, array: action.payload, fetching: false, errorEpiso: false }
        case GET_FILTERS_EPISODES:
            return { ...state, fetching: true }
        case GET_FILTERS_EPISODES_ERROR:
            return { ...state, fetching: false, errorEpiso: action.payload }
        case GET_FILTERS_EPISODES_SUCCESS:
            return { ...state, filteredEpi: action.payload, fetching: false, errorEpiso: false }
        case REMOVE_FILTERED_EPISODE:
            return { ...state, filteredEpi: action.payload, errorEpiso: false, searchEpi: '' }
        case UPDATE_PAGE_EPISODE:
            return {
                ...state, nextPageEpisod: action.payload.next,
                prevPageEpisod: action.payload.prev, totalPagesEpisod: action.payload.total
            }
        case SET_SEARCH_EP:
            return { ...state, searchEpi: action.payload }
        default:
            return state
    }
}

//Actions Creators

export const getEpisodesFiltersAction = (searchName) => (dispatch, getState) => {
    const query = gql`
    query ($name: String) {
        episodes( filter: { name: $name }) {
            results{
              id
              name
              episode
              air_date
              characters{
                id
                name
                image
              }
            }
          }
      }
    `
    dispatch({
        type: GET_FILTERS_EPISODES
    })

    return client.query({
        query,
        variables: { name: searchName }
    }).then(({ data }) => {
        for (let i = 0; i < data.episodes.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.episodes.results[i].characters.splice(5, data.episodes.results[i].characters.length);
            }
        }
        dispatch({
            type: GET_FILTERS_EPISODES_SUCCESS,
            payload: data.episodes.results

        })
        dispatch({
            type: SET_SEARCH_EP,
            payload: searchName
        })
    }).catch((errors) => {
        dispatch({
            type: GET_FILTERS_EPISODES_ERROR,
            payload: true
        })

        return
    })

}

export const removeSearchEpisodeAction = () => (dispatch, getState) => {
    const filtered = [];

    dispatch({
        type: REMOVE_FILTERED_EPISODE,
        payload: filtered
    })
}

export const getEpisodesAction = (direction) => (dispatch, getState) => {
    const query = gql`
    query ($page: Int){
        episodes(page: $page){
          info{
            pages
            next
            prev
          }
          results{
            id
            name
            episode
            air_date
            characters{
               id
               name
               image
            }
          }
        }
      }
    `
    dispatch({
        type: GET_EPISODES
    })
    let pageToGo;
    if (direction !== undefined) {
        let { prevPageEpisod } = getState().episodes
        pageToGo = prevPageEpisod;
    } else {
        let { nextPageEpisod } = getState().episodes
        pageToGo = nextPageEpisod;
    }

    return client.query({
        query,
        variables: { page: pageToGo }
    }).then(({ data }) => {
        for (let i = 0; i < data.episodes.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.episodes.results[i].characters.splice(5, data.episodes.results[i].characters.length);
            }
        }
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: data.episodes.results
        })
        dispatch({
            type: UPDATE_PAGE_EPISODE,
            payload: {
                next: data.episodes.info.next ? data.episodes.info.next : null,
                prev: data.episodes.info.prev ? data.episodes.info.prev : null,
                total: data.episodes.info.pages
            }
        })
    }).catch((errors) => {
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: true
        })

        return
    })

}