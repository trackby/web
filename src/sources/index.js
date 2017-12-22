import Rest from './Rest'

const authRegister = p => Rest.post('signup', p)
const authLogin = p => Rest.post('auth', p)
const fetchShow = id => Rest.get(`shows/${id}`)

export { authRegister, authLogin, fetchShow }
