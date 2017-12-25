import moment from 'moment'
import jwtDecode from 'jwt-decode'

export const isJwtExpired = token => {
  if (token) {
    try {
      const { exp } = jwtDecode(token)
      const now = moment.utc(moment.now()).unix()
      return now + 5 >= exp
    } catch (error) {
      return true
    }
  }
  return true
}

export const getId = token => {
  try {
    const { id } = jwtDecode(token)
    return id
  } catch (error) {
    return -1
  }
}
export const isAdmin = token => {
  try {
    return jwtDecode(token).isAdmin
  } catch (error) {
    return false
  }
}
