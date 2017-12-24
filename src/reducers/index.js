import { combineReducers } from 'redux'
import auth from './auth'
import show from './show'

const rootReducer = combineReducers({
  auth,
  show,
})

export default rootReducer
