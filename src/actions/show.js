import {
  ADD_COMMENT_SHOW,
  FETCH_COMMENTS_SHOW,
  FETCH_COMMENTS_SHOW_ERROR,
  FETCH_COMMENTS_SHOW_SUCCESS,
  FETCH_SHOW,
  FETCH_SHOW_ERROR,
  FETCH_SHOW_SUCCESS,
  RATE_SHOW,
  SHOW_RESET,
  UNWATCH_SHOW,
  UNWATCH_SHOW_ERROR,
  WATCH_SHOW,
  WATCH_SHOW_ERROR,
} from 'constants/ActionTypes'

import {
  createRatingShow,
  createShowComment,
  fetchShow,
  fetchShowComments,
  unwatchShow,
  updateRatingShow,
  watchShow,
} from 'sources'

export const getShow = name => async dispatch => {
  try {
    dispatch({ type: SHOW_RESET })
    dispatch({ type: FETCH_SHOW })
    const showReq = fetchShow(name)
    const data = (await showReq).data
    dispatch({ type: FETCH_SHOW_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_SHOW_ERROR })
  }
}

export const markWatched = name => async (dispatch, getState) => {
  try {
    if (getState().show && !getState().show.watched) {
      dispatch({ type: WATCH_SHOW, payload: { show_name: name } })
      await watchShow(name)
    }
  } catch (error) {
    dispatch({ type: WATCH_SHOW_ERROR, payload: { show_name: name } })
  }
}

export const unmarkWatched = name => async (dispatch, getState) => {
  try {
    if (getState().show && getState().show.watched) {
      dispatch({ type: UNWATCH_SHOW, payload: { show_name: name } })
      await unwatchShow(name)
    }
  } catch (error) {
    dispatch({ type: UNWATCH_SHOW_ERROR, payload: { show_name: name } })
  }
}

export const getComments = name => async dispatch => {
  try {
    dispatch({ type: FETCH_COMMENTS_SHOW })
    const showReq = fetchShowComments(name)
    const data = (await showReq).data
    dispatch({ type: FETCH_COMMENTS_SHOW_SUCCESS, payload: { show_name: name, comments: data } })
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({ type: FETCH_COMMENTS_SHOW_SUCCESS, payload: { show_name: name, comments: [] } })
    } else {
      dispatch({ type: FETCH_COMMENTS_SHOW_ERROR })
    }
  }
}

export const createComment = (name, body) => async dispatch => {
  try {
    const showReq = createShowComment(name, { comment_body: body })
    const comment = (await showReq).data
    console.log(comment)
    dispatch({ type: ADD_COMMENT_SHOW, payload: { show_name: name, comment } })
  } catch (error) {
    console.log(error)
  }
}

export const rateShow = (name, rating) => async (dispatch, getState) => {
  try {
    if (!getState().show.rating) {
      const rateReq = createRatingShow(name, rating)
      const data = (await rateReq).data
      dispatch({ type: RATE_SHOW, payload: { show_name: name, rating, ...data } })
    } else {
      const rateReq = updateRatingShow(name, rating)
      const data = (await rateReq).data
      dispatch({ type: RATE_SHOW, payload: { show_name: name, rating, ...data } })
    }
  } catch (error) {
    console.log(error)
  }
}
