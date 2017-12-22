import { FETCH_SHOW, FETCH_SHOW_SUCCESS, FETCH_SHOW_ERROR, SHOW_RESET } from 'constants/ActionTypes'

const initialState = { fetched: false, fetching: false }

export default function counter(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOW:
      return Object.assign({}, state, { fetching: true })
    case FETCH_SHOW_SUCCESS:
      return Object.assign({}, state, { fetched: true, fetching: false, ...action.payload })
    case FETCH_SHOW_ERROR:
      return Object.assign({}, state, { fetched: false, fetching: false })
    case SHOW_RESET:
      return initialState
    default:
      return state
  }
}
