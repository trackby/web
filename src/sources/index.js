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

const upload = file => Rest.post(`upload/`, file)

// Admin endpoints
const createShow = (show, { image_url, info, trailer_url, director_name, writer_name }) =>
  Rest.post(
    `shows/`,
    { show },
    {
      image_url,
      info,
      trailer_url,
      director_name,
      writer_name,
    }
  )

const createSeason = (show, season, { info, image_url, trailer_url, season_year }) =>
  Rest.post(
    `shows/`,
    {
      show,
      season,
    },
    {
      info,
      image_url,
      trailer_url,
      season_year,
    }
  )

const createEpisode = (show, season, episode, { info, image_url, trailer_url, episode_name }) =>
  Rest.post(
    `shows/`,
    {
      show,
      season,
      episode,
    },
    {
      info,
      image_url,
      trailer_url,
      episode_name,
    }
  )

const updateShow = (show, params) => Rest.patch(`shows/`, { show }, params)

const updateSeason = (show, season, params) =>
  Rest.patch(
    `shows/`,
    {
      show,
      season,
    },
    params
  )

const updateEpisode = (show, season, episode, params) =>
  Rest.patch(
    `shows/`,
    {
      show,
      season,
      episode,
    },
    params
  )

const deleteShow = show => Rest.del(`shows/`, { show })
const deleteSeason = (show, season) => Rest.del(`shows/`, { show, season })
const deleteEpisode = (show, season, episode) => Rest.del(`shows/`, { show, season, episode })

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
  createFriendship,
  removeFriendship,
  updateFriendship,
  fetchFriends,
  fetchFriendshipRequests,
  fetchFriendship,
  createShow,
  createSeason,
  createEpisode,
  updateShow,
  updateSeason,
  updateEpisode,
  deleteShow,
  deleteSeason,
  deleteEpisode,
}
