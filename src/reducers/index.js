import { combineReducers } from 'redux'
import auth from './auth'
import show from './show'
import user from './user'

const rootReducer = combineReducers({
  auth,
  show,
  user,
})

export default rootReducer
