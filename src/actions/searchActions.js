import { fetchWithCredentials } from '../concerns/fetchable'

const search = query => {
  return dispatch => {
    fetchWithCredentials(`https://nibbl.live/api/v1/users/search?query=${query}`)
    .then(json => dispatch({type: 'SET_SEARCH', users: json}))
  }
}

const clearSearch = () => {
  return {type: 'CLEAR_SEARCH'}
}

export {
  search,
  clearSearch
}