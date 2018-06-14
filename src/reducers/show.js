/* eslint-disable eqeqeq */
import {
  ADD_COMMENT_SHOW,
  FETCH_COMMENTS_SHOW,
  FETCH_COMMENTS_SHOW_ERROR,
  FETCH_COMMENTS_SHOW_SUCCESS,
  FETCH_SHOW,
  FETCH_SHOW_ERROR,
  FETCH_SHOW_SUCCESS,
  SHOW_RESET,
  UNWATCH_SHOW,
  UNWATCH_SHOW_ERROR,
  WATCH_SHOW,
  WATCH_SHOW_ERROR,
  RATE_SHOW,
  UPDATE_SHOW,
} from 'constants/ActionTypes'

const initialState = {
  fetched: false,
  fetching: false,
  error: false,
  commentsFetched: false,
  commentsFetching: false,
  commentsError: false,
  comments: [],
}

export default function show(state = initialState, { payload, type }) {
  // case insensitive string comparasion for payload and action show names
  const showName = payload ? payload.show_name : ''
  const compareStrings = (a, b) => (a || '').toLowerCase() === (b || '').toLowerCase()

  switch (type) {
    case FETCH_SHOW:
      return Object.assign({}, state, { fetching: true })
    case UPDATE_SHOW:
      return Object.assign({}, state, { ...payload })
    case FETCH_SHOW_SUCCESS:
      return Object.assign({}, state, { fetched: true, fetching: false, ...payload })
    case FETCH_SHOW_ERROR:
      return Object.assign({}, state, { fetched: false, fetching: false, error: true })
    case SHOW_RESET:
      return initialState
    case WATCH_SHOW:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, { watched: true })
      }
      return state
    case WATCH_SHOW_ERROR:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, { watched: false })
      }
      return state
    case UNWATCH_SHOW:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, { watched: false })
      }
      return state
    case UNWATCH_SHOW_ERROR:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, { watched: true })
      }
      return state

    case FETCH_COMMENTS_SHOW_SUCCESS:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, {
          commentsFetched: true,
          commentsFetching: false,
          commentsError: false,
          comments: payload.comments || [],
        })
      }
      return state
    case ADD_COMMENT_SHOW:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, {
          commentsFetched: true,
          commentsFetching: false,
          comments: [...state.comments, payload.comment],
        })
      }
      return state
    case FETCH_COMMENTS_SHOW:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, {
          commentsFetched: false,
          commentsFetching: true,
          comments: [],
        })
      }
      return state
    case FETCH_COMMENTS_SHOW_ERROR:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, {
          commentsFetched: false,
          commentsFetching: false,
          commentsError: true,
          comments: [],
        })
      }
      return state
    case RATE_SHOW:
      if (payload && compareStrings(showName, state.show_name)) {
        return Object.assign({}, state, {
          rating: payload.rating,
          overall_rating: payload.overall_rate,
        })
      }
      return state
    default:
      return state
  }
}
