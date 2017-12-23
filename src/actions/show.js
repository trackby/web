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

import { fetchShow, watchShow, unwatchShow } from 'sources'

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
    if (getState().show && !getState().show.watched) {
      dispatch({ type: UNWATCH_SHOW, payload: { id } })
      await unwatchShow(id)
    }
  } catch (error) {
    dispatch({ type: UNWATCH_SHOW_ERROR, payload: { id } })
  }
}
