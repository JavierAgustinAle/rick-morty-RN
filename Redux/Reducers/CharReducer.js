import {
    GET_CHARACTERS, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR,
    GET_FILTERS, GET_FILTERS_ERROR, GET_FILTERS_SUCCESS, REMOVE_FILTERED,
    UPDATE_PAGE, SET_SEARCH
} from '../Actions/CharActions';
// Apollo
import { gql } from "apollo-boost"
// Client
import { client } from '../ApolloClient';

let initialData = {
    fetching: false,
    array: [],
    filtered: [],
    search: '',
    nextPage: 1,
    prevPage: 0,
    totalPages: 0,
    error: false
}


// Reducer

export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, fetching: true }
        case GET_CHARACTERS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_CHARACTERS_SUCCESS:
            return { ...state, array: action.payload, fetching: false }
        case GET_FILTERS:
            return { ...state, fetching: true }
        case GET_FILTERS_ERROR:
            return { ...state, fetching: false, error: action.payload, filtered: [] }
        case GET_FILTERS_SUCCESS:
            return { ...state, filtered: action.payload, fetching: false, error: false }
        case REMOVE_FILTERED:
            return { ...state, filtered: action.payload, error: false, search: '' }
        case SET_SEARCH:
            return { ...state, search: action.payload }
        case UPDATE_PAGE:
            return {
                ...state, nextPage: action.payload.next,
                prevPage: action.payload.prev, totalPages: action.payload.total
            }
        default:
            return state
    }
}

//Actions Creators

export let getCharFiltersAction = (searchName, searchType) => (dispatch, getState) => {
    let query = gql`
        query ($name: String, $type: String) {
            characters( filter: { name: $name, type: $type }) {
              results {
                id
                name
                image
                type
                gender
                species
                status
              }
            }
          }
        `
    dispatch({
        type: GET_FILTERS
    })

    return client.query({
        query,
        variables: { name: searchName, type: searchType }
    }).then(({ data }) => {
        let searchValue = searchName ? searchName : searchType;
        dispatch({
            type: SET_SEARCH,
            payload: searchValue
        })
        dispatch({
            type: GET_FILTERS_SUCCESS,
            payload: data.characters.results

        })
    }).catch((errors) => {
        dispatch({
            type: GET_FILTERS_ERROR,
            payload: true
        })
        return
    })

}

export let removeSearchCharAction = () => (dispatch, getState) => {
    let filtered = []

    dispatch({
        type: REMOVE_FILTERED,
        payload: filtered
    })


}


export let getCharactersAction = (direction) => (dispatch, getState) => {
    let query = gql`
        query ($page: Int){
            characters(page: $page){
              info{
                pages
                next
                prev
              }
              results{
                id
                name
                image
                type
                gender
                species
              }
            }
          }
        `
    dispatch({
        type: GET_CHARACTERS
    })

    let pageToGo;
    if (direction !== undefined) {
        let { prevPage } = getState().characters
        pageToGo = prevPage;
    } else {
        let { nextPage } = getState().characters
        pageToGo = nextPage;
    }


    return client.query({
        query,
        variables: { page: pageToGo }
    }).then(({ data }) => {
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: data.characters.results
        })
        dispatch({
            type: UPDATE_PAGE,
            payload: {
                next: data.characters.info.next ? data.characters.info.next : null,
                prev: data.characters.info.prev ? data.characters.info.prev : null,
                total: data.characters.info.pages
            }
        })
    }).catch((errors) => {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            payload: true
        })
        return

    })

}