import { UPLOAD_REQUEST, UPLOAD_FAILURE, UPLOAD_SUCCESS } from 'constants/ActionTypes'

import { upload } from 'sources'

export const fileUpload = file => async dispatch => {
  try {
    dispatch({ type: UPLOAD_REQUEST })
    console.dir(file)
    await upload(file)
    setTimeout(() => {
      dispatch({ type: UPLOAD_SUCCESS, payload: 'Successfully uploaded' })
    }, 3000)
  } catch (error) {
    console.log(error)
    if (error.response && error.response.status === 400) {
      setTimeout(() => {
        dispatch({ type: UPLOAD_FAILURE, payload: 'Bad Request' })
      }, 2000)
    }
    setTimeout(() => {
      dispatch({ type: UPLOAD_FAILURE, payload: 'Unknown error' })
    }, 2000)
  }
}
