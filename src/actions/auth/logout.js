import {AUTH_LOGOUT } from 'constants/ActionTypes'

export const logout = () =>
  async (dispatch) => {
      localStorage.removeItem('token');
      dispatch({type:AUTH_LOGOUT});
  }
