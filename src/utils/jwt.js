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
