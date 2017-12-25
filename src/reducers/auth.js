import { AUTH_ERROR, AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_REGISTER } from 'constants/ActionTypes'

const initialState = { token: '', error: '', status: 'not_authenticated' }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return Object.assign({}, state, { error: action.payload, status: 'not_authenticated' })
    case AUTH_LOGIN:
      return Object.assign({}, state, { error: '', status: 'progress' })
    case AUTH_REGISTER:
      return Object.assign({}, state, { error: '', status: 'progress' })
    case AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, { token: action.payload.token, error: '', status: 'authenticated' })
    case AUTH_LOGOUT:
      return Object.assign({}, state, { token: '', error: '', status: 'not_authenticated' })
    default:
      return state
  }
}
