import { AUTH_REGISTER, AUTH_LOGIN, AUTH_ERROR } from 'constants/ActionTypes'
import {authRegister, authLogin} from 'sources';

export const register = (params) =>
 async (dispatch) => {
  try {
    const a = authRegister(params);

    const data = await a.data;

    const login = authLogin({username:params.username, password:params.password});
    const loginData = await login.data;

    localStorage.setItem('token', loginData.token)

  }catch(error){
    if(error.status === 409){
      dispatch({type:'AUTH_ERROR', payload:'User already exists'})
    }
    else{
      dispatch({type:'AUTH_ERROR', payload:'Unknown error'})
    }
  }

  }

