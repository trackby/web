import { combineReducers } from 'redux'
import auth from './auth'
import show from './show'
import user from './user'
import otherUser from './otherUser'

const rootReducer = combineReducers({
  auth,
  show,
  user,
  otherUser,
})

export default rootReducer
