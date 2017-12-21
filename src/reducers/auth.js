import { AUTH_ERROR, AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from 'constants/ActionTypes'

const initialState = {token:null, error:null, status:'not_authenticated'}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return Object.assign({}, state, {error:action.payload, status:'not_authenticated'})
    case AUTH_LOGIN:
      return Object.assign({}, state, {error:null, status:'in_progress'})
    case AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, {token:action.payload, error:null, status:'authenticated'})
    case AUTH_LOGOUT:
      return Object.assign({}, state, {token:null, error:null, status:'not_authenticated'})
    default:
      return state
  }
}
