import { AUTH_LOGIN, AUTH_ERROR, AUTH_LOGIN_SUCCESS } from 'constants/ActionTypes'
import { authLogin } from 'sources'
import { isJwtExpired, getId } from 'utils/jwt'

export const login = ({ username, password }) => async dispatch => {
  try {
    const loginReq = authLogin({ username, password })
    dispatch({ type: AUTH_LOGIN })
    const loginData = (await loginReq).data
    localStorage.setItem('token', loginData.token)
    localStorage.setItem('username', username)
    const id = getId(loginData.token)
    localStorage.setItem('user_id', id)
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: { token: loginData.token, username, id } })
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch({ type: AUTH_ERROR, payload: 'Wrong username and password combination' })
      } else if (error.response.status === 404) {
        dispatch({ type: AUTH_ERROR, payload: "Username doesn't exist" })
      }
    } else {
      // eslint-disable-next-line no-console
      console.log(error)
      dispatch({ type: AUTH_ERROR, payload: 'Unknown error' })
    }
  }
}

export const reuseToken = () => (dispatch, getState) => {
  try {
    if (getState().auth.status === 'not_authenticated') {
      const token = localStorage.getItem('token')
      const username = localStorage.getItem('username')
      const id = localStorage.getItem('user_id')
      if (token && !isJwtExpired(token)) {
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: { token, username, id } })
      }
    }
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: 'Unknown error' })
  }
}
