import {
    GET_LOCATIONS, GET_LOCATIONS_SUCCESS, GET_LOCATIONS_ERROR,
    GET_LOCATIONS_FILTERS, GET_LOCATIONS_FILTERS_ERROR, GET_LOCATIONS_FILTERS_SUCCESS, REMOVE_FILTERED,
    UPDATE_PAGE_LOCATIONS, SET_SEARCH_LOC
} from '../Actions/LocationActions';
// Apollo
import { gql } from "apollo-boost"
// Client
import { client } from '../ApolloClient';

let initialData = {
    fetching: false,
    array: [],
    filtered: [],
    searchLoc: '',
    nextPageLoca: 1,
    prevPageLoca: 0,
    totalPagesLoca: 0,
    errorLoc: false
}

// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_LOCATIONS:
            return { ...state, fetching: true }
        case GET_LOCATIONS_ERROR:
            return { ...state, fetching: false, errorLoc: action.payload }
        case GET_LOCATIONS_SUCCESS:
            return { ...state, array: action.payload, fetching: false, errorLoc: false }
        case GET_LOCATIONS_FILTERS:
            return { ...state, fetching: true }
        case GET_LOCATIONS_FILTERS_ERROR:
            return { ...state, fetching: false, errorLoc: action.payload }
        case GET_LOCATIONS_FILTERS_SUCCESS:
            return { ...state, filtered: action.payload, fetching: false, errorLoc: false }
        case REMOVE_FILTERED:
            return { ...state, filtered: action.payload, errorLoc: false, searchLoc: '' }
        case UPDATE_PAGE_LOCATIONS:
            return {
                ...state, nextPageLoca: action.payload.nextLoc,
                prevPageLoca: action.payload.prevLoc, totalPagesLoca: action.payload.totalLoc
            }
        case SET_SEARCH_LOC:
            return { ...state, searchLoc: action.payload }
        default:
            return state
    }
}


//Actions Creators
export const getLocationsFiltersAction = (searchName, searchType) => (dispatch, getState) => {
    const query = gql`
    query ($name: String, $type: String) {
        locations( filter: { name: $name, type: $type }) {
            results{
              id
              name
              dimension
              type
              residents{
                id
                name
                image
              }
            }
          }
      }
    `
    dispatch({
        type: GET_LOCATIONS_FILTERS
    })

    return client.query({
        query,
        variables: { name: searchName, type: searchType }
    }).then(({ data }) => {
        for (let i = 0; i < data.locations.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.locations.results[i].residents.splice(5, data.locations.results[i].residents.length);
            }
        }

        dispatch({
            type: GET_LOCATIONS_FILTERS_SUCCESS,
            payload: data.locations.results

        })
        const searchValue = searchName ? searchName : searchType;
        dispatch({
            type: SET_SEARCH_LOC,
            payload: searchValue
        })
    }).catch((errors) => {
        dispatch({
            type: GET_LOCATIONS_FILTERS_ERROR,
            payload: true
        })
        return
    })
}

export const removeSearchLocationsAction = () => (dispatch, getState) => {
    const filtered = [];

    dispatch({
        type: REMOVE_FILTERED,
        payload: filtered
    })
}

export const getLocationsAction = (direction) => (dispatch, getState) => {
    const query = gql`
        query ($page: Int){
            locations(page: $page){
            info{
                pages
                next
                prev
            }
            results{
                id
                name
                type
                dimension
                residents{
                id
                name
                image
                }
            }
            }
        }
    `
    dispatch({
        type: GET_LOCATIONS
    })

    let pageToGo;
    if (direction !== undefined) {
        let { prevPageLoca } = getState().locations
        pageToGo = prevPageLoca;
    } else {
        let { nextPageLoca } = getState().locations
        pageToGo = nextPageLoca;
    }

    return client.query({
        query,
        variables: { page: pageToGo }
    }).then(({ data, error }) => {
        for (let i = 0; i < data.locations.results.length; i++) {
            for (let x = 0; x < 5; x++) {
                data.locations.results[i].residents.splice(5, data.locations.results[i].residents.length);
            }
        }

        dispatch({
            type: GET_LOCATIONS_SUCCESS,
            payload: data.locations.results
        })
        dispatch({
            type: UPDATE_PAGE_LOCATIONS,
            payload: {
                nextLoc: data.locations.info.next ? data.locations.info.next : null,
                prevLoc: data.locations.info.prev ? data.locations.info.prev : null,
                totalLoc: data.locations.info.pages
            }
        })

    }).catch((errors) => {
        dispatch({
            type: GET_LOCATIONS_ERROR,
            payload: true
        })
        return
    })

}