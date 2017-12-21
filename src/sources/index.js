import Rest from 'Rest'

const authRegister = p => Rest.post('signup', p);
const authLogin = p => Rest.post('auth', p);

export{
  authRegister,
  authLogin
}
