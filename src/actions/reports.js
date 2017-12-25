import { fetchReports } from 'sources'
import { FETCH_REPORTS } from 'constants/ActionTypes'

export const getReports = () => async dispatch => {
  try {
    const repReq = fetchReports()
    const data = (await repReq).data
    dispatch({ type: FETCH_REPORTS, payload: data })
  } catch (error) {
    console.log(error)
  }
}
