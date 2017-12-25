import { combineReducers } from 'redux'
import auth from './auth'
import show from './show'
import uploadReducer from './upload'
import user from './user'
import otherUser from './otherUser'

const rootReducer = combineReducers({
  auth,
  show,
  uploadReducer,
  user,
  otherUser,
})

export default rootReducer
