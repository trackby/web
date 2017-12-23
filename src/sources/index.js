import Rest from './Rest'

const authRegister = p => Rest.post('signup', p)
const authLogin = p => Rest.post('auth', p)
const fetchShow = id => Rest.get(`shows/${id}`)
const watchShow = id => Rest.post(`shows/${id}/watch`, {})
const unwatchShow = id => Rest.delete(`shows/${id}/watch`)

export { authRegister, authLogin, fetchShow, watchShow, unwatchShow }
