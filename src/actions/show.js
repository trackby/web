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

export const getShow = id => async dispatch => {
  try {
    dispatch({ type: SHOW_RESET })
    dispatch({ type: FETCH_SHOW })
    const showReq = fetchShow(id)
    const data = (await showReq).data
    dispatch({ type: FETCH_SHOW_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_SHOW_ERROR })
  }
}

export const markWatched = id => async (dispatch, getState) => {
  try {
    if (getState().show && !getState().show.watched) {
      dispatch({ type: WATCH_SHOW, payload: { id } })
      await watchShow(id)
    }
  } catch (error) {
    dispatch({ type: WATCH_SHOW_ERROR, payload: { id } })
  }
}

export const unmarkWatched = id => async (dispatch, getState) => {
  try {
    if (getState().show && getState().show.watched) {
      dispatch({ type: UNWATCH_SHOW, payload: { id } })
      await unwatchShow(id)
    }
  } catch (error) {
    dispatch({ type: UNWATCH_SHOW_ERROR, payload: { id } })
  }
}

export const getComments = id => async dispatch => {
  try {
    dispatch({ type: FETCH_COMMENTS_SHOW })
    const showReq = fetchShowComments(id)
    const data = (await showReq).data
    dispatch({ type: FETCH_COMMENTS_SHOW_SUCCESS, payload: { id, comments: data } })
  } catch (error) {
    if (error.response && error.response.status === 404) {
      dispatch({ type: FETCH_COMMENTS_SHOW_SUCCESS, payload: { id, comments: [] } })
    } else {
      dispatch({ type: FETCH_COMMENTS_SHOW_ERROR })
    }
  }
}

export const createComment = (id, body) => async dispatch => {
  try {
    const showReq = createShowComment(id, { comment_body: body })
    const comment = (await showReq).data
    console.log(comment)
    dispatch({ type: ADD_COMMENT_SHOW, payload: { id, comment } })
  } catch (error) {
    console.log(error)
  }
}

export const rateShow = (id, rating) => async (dispatch, getState) => {
  try {
    if (!getState().show.rating) {
      const rateReq = createRatingShow(id, rating)
      const data = (await rateReq).data
      dispatch({ type: RATE_SHOW, payload: { id, rating, ...data } })
    } else {
      const rateReq = updateRatingShow(id, rating)
      const data = (await rateReq).data
      dispatch({ type: RATE_SHOW, payload: { id, rating, ...data } })
    }
  } catch (error) {
    console.log(error)
  }
}
