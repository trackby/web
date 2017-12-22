import { AUTH_REGISTER, AUTH_ERROR } from 'constants/ActionTypes'
import { authRegister } from 'sources'
import { login } from './login'

export const register = ({ username, password, age, email }) => async dispatch => {
  try {
    dispatch({ type: AUTH_REGISTER })
    await authRegister({ username, password, age, email })
    login({ username, password })(dispatch)
  } catch (error) {
    console.log(error)
    if (error.response && error.response.status === 409) {
      dispatch({ type: AUTH_ERROR, payload: 'User already exists' })
    } else {
      dispatch({ type: AUTH_ERROR, payload: 'Unknown error' })
    }
  }
}
