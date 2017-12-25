import Rest from './Rest'

const authRegister = p => Rest.post('signup', p)
const authLogin = p => Rest.post('auth', p)
const fetchShow = show => Rest.get(`shows/`, { show })
const watchShow = show => Rest.post(`shows/watch`, null, { show })
const unwatchShow = show => Rest.del(`shows/watch`, { show })
const fetchShowComments = show => Rest.get(`shows/comments`, { show })
const createShowComment = (show, p) => Rest.post(`shows/comments`, p, { show })
const createRatingShow = (show, rating) => Rest.post(`shows/rate`, { rating }, { show })
const updateRatingShow = (show, rating) => Rest.patch(`shows/rate`, { rating }, { show })
const createFriendship = id => Rest.post(`friendships/create`, { target_user_id: parseInt(id) })
const removeFriendship = id => Rest.del(`friendships/remove`, null, { target_user_id: parseInt(id) })
const updateFriendship = (id, status) => Rest.patch(`friendships/update`, { target_user_id: parseInt(id), status })
const fetchFriends = username => Rest.get(`/user/${username}/friends`)
const fetchFriendshipRequests = () => Rest.post(`/friendships/requests/INCOMING`)
const fetchFriendship = (firstUser, secondUser) =>
  Rest.get(`/friendships/show/`, {
    first_user_id: firstUser,
    second_user_id: secondUser,
  })

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
  fetchFriendship,
}
