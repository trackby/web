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

export default function show(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHOW:
      return Object.assign({}, state, { fetching: true })
    case FETCH_SHOW_SUCCESS:
      return Object.assign({}, state, { fetched: true, fetching: false, ...action.payload })
    case FETCH_SHOW_ERROR:
      return Object.assign({}, state, { fetched: false, fetching: false, error: true })
    case SHOW_RESET:
      return initialState
    case WATCH_SHOW:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, { watched: true })
      }
      return state
    case WATCH_SHOW_ERROR:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, { watched: false })
      }
      return state
    case UNWATCH_SHOW:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, { watched: false })
      }
      return state
    case UNWATCH_SHOW_ERROR:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, { watched: true })
      }
      return state

    case FETCH_COMMENTS_SHOW_SUCCESS:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, {
          commentsFetched: true,
          commentsFetching: false,
          commentsError: false,
          comments: [...action.payload.comments],
        })
      }
      return state
    case ADD_COMMENT_SHOW:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, {
          commentsFetched: true,
          commentsFetching: false,
          comments: [...state.comments, action.payload.comment],
        })
      }
      return state
    case FETCH_COMMENTS_SHOW:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, {
          commentsFetched: false,
          commentsFetching: true,
          comments: [],
        })
      }
      return state
    case FETCH_COMMENTS_SHOW_ERROR:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, {
          commentsFetched: false,
          commentsFetching: false,
          commentsError: true,
          comments: [],
        })
      }
      return state
    case RATE_SHOW:
      if (action.payload && action.payload.show_name === state.show_name) {
        return Object.assign({}, state, {
          rating: action.payload.rating,
          overall_rating: action.payload.overall_rate,
        })
      }
      return state
    default:
      return state
  }
}
