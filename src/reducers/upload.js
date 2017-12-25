import { UPLOAD_REQUEST, UPLOAD_FAILURE, UPLOAD_SUCCESS } from 'constants/ActionTypes'

const initialState = {
  uploaded: false,
  uploading: false,
  error: false,
}

export default function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_REQUEST:
      return Object.assign({}, state, { uploading: true })
    case UPLOAD_SUCCESS:
      return Object.assign({}, state, { uploaded: true, uploading: false, error: false })
    case UPLOAD_FAILURE:
      return Object.assign({}, state, { uploading: false, uploaded: false, error: true })
    default:
      return state
  }
}
