import Rest from './Rest'

const authRegister = p => Rest.post('signup', p)
const authLogin = p => Rest.post('auth', p)
const fetchShow = id => Rest.get(`shows/${id}`)
const watchShow = id => Rest.post(`shows/${id}/watch`, {})
const unwatchShow = id => Rest.del(`shows/${id}/watch`)
const fetchShowComments = id => Rest.get(`shows/${id}/comments`)
const createShowComment = (id, p) => Rest.post(`shows/${id}/comments`, p)
const createRatingShow = (id, rating) => Rest.post(`shows/${id}/rate`, { rating })
const updateRatingShow = (id, rating) => Rest.patch(`shows/${id}/rate`, { rating })

const upload = file => Rest.post(`upload/`, file)

export {
  authRegister,
  authLogin,
  fetchShow,
  watchShow,
  unwatchShow,
  fetchShowComments,
  createShowComment,
  createRatingShow,
  updateRatingShow,
  upload,
}
