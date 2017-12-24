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
const createFriendship = id => Rest.post(`shows/${id}/rate`, { target_user_id: id })
const removeFriendship = id => Rest.del(`shows/${id}/rate`, { target_user_id: id })
const updateFriendship = (id, status) => Rest.patch(`shows/${id}/rate`, { target_user_id: id, status })
const fetchFriends = username => Rest.get(`/user/${username}/friends`)
const fetchFriendshipRequests = () => Rest.get(`/friendships/requests/`, { direction: 'INCOMING' })

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
  createFriendship,
  removeFriendship,
  updateFriendship,
  fetchFriends,
  fetchFriendshipRequests,
}
