import {
  FETCH_SHOW,
  FETCH_SHOW_SUCCESS,
  FETCH_SHOW_ERROR,
  SHOW_RESET,
  WATCH_SHOW,
  WATCH_SHOW_ERROR,
  UNWATCH_SHOW,
  UNWATCH_SHOW_ERROR,
} from 'constants/ActionTypes'

const initialState = { fetched: false, fetching: false }

export default function show(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOW:
      return Object.assign({}, state, { fetching: true })
    case FETCH_SHOW_SUCCESS:
      return Object.assign({}, state, { fetched: true, fetching: false, ...action.payload })
    case FETCH_SHOW_ERROR:
      return Object.assign({}, state, { fetched: false, fetching: false })
    case SHOW_RESET:
      return initialState

    case WATCH_SHOW:
      if (action.payload && action.payload.id === state.id) {
        return Object.assign({}, state, { watched: true })
      }
      return state
    case WATCH_SHOW_ERROR:
      if (action.payload && action.payload.id === state.id) {
        return Object.assign({}, state, { watched: false })
      }
      return state
    case UNWATCH_SHOW:
      if (action.payload && action.payload.id === state.id) {
        return Object.assign({}, state, { watched: false })
      }
      return state
    case UNWATCH_SHOW_ERROR:
      if (action.payload && action.payload.id === state.id) {
        return Object.assign({}, state, { watched: true })
      }
      return state
    default:
      return state
  }
}
