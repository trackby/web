import { FETCH_SHOW, FETCH_SHOW_SUCCESS, FETCH_SHOW_ERROR, SHOW_RESET } from 'constants/ActionTypes'
import { fetchShow } from 'sources'

export const getShow = id => async dispatch => {
  try {
    dispatch({ type: FETCH_SHOW })
    const showReq = fetchShow(id)
    const data = (await showReq).data
    dispatch({ type: FETCH_SHOW_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_SHOW_ERROR })
  }
}
