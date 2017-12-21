import {AUTH_LOGIN, AUTH_ERROR, AUTH_LOGIN_SUCCESS } from 'constants/ActionTypes'
import {authLogin} from 'sources';

export const login = (params) =>
  async (dispatch) => {
    try {

      const loginReq = authLogin({username:params.username, password:params.password});
      dispatch({type:AUTH_LOGIN});
      const loginData = await loginReq.data;

      localStorage.setItem('token', loginData.token);
      dispatch({type:AUTH_LOGIN_SUCCESS, payload:loginData.token});

    }catch(error){
      if(error.status === 401){
        dispatch({type:AUTH_ERROR, payload:'Wrong username password combination'})
      }
      else if(error.statue === 404){
        dispatch({type:AUTH_ERROR, payload:'You\'re not registered'})
      }
      else{
        dispatch({type:AUTH_ERROR, payload:'You\'re not registered'})
      }
    }
  }
