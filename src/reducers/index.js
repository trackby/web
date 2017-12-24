import { combineReducers } from 'redux'
import auth from './auth'
import show from './show'
import uploadReducer from './upload'

const rootReducer = combineReducers({
  auth,
  show,
  uploadReducer,
})

export default rootReducer
