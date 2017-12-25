import {
  ADD_FRIEND,
  APPROVE_FRIENDSHIP,
  DENY_FRIENDSHIP,
  FETCH_FRIENDSHIP,
  GET_FRIENDS,
  GET_FRIENDSHIP_REQUESTS,
  OTHER_USER_INIT,
  OTHER_USER_RESET,
  REMOVE_FRIEND,
} from 'constants/ActionTypes'

import {
  createFriendship,
  fetchFriends,
  fetchFriendship,
  fetchFriendshipRequests,
  removeFriendship,
  updateFriendship,
} from 'sources'

export const getFriends = username => async dispatch => {
  try {
    const friendReq = fetchFriends(username)
    const data = (await friendReq).data
    dispatch({ type: GET_FRIENDS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const getRequests = () => async dispatch => {
  try {
    const friendReq = fetchFriendshipRequests()
    const data = (await friendReq).data
    dispatch({ type: GET_FRIENDSHIP_REQUESTS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const addFriend = id => async dispatch => {
  try {
    const friendReq = createFriendship(id)
    const data = (await friendReq).data
    dispatch({ type: ADD_FRIEND, payload: { id } })
  } catch (error) {
    console.log(error)
  }
}

export const removeFriend = id => async dispatch => {
  try {
    await removeFriendship(id)
    dispatch({ type: REMOVE_FRIEND, payload: { id } })
  } catch (error) {
    console.log(error)
  }
}

export const approveRequest = id => async dispatch => {
  try {
    await updateFriendship(id, 'APPROVED')
    dispatch({ type: APPROVE_FRIENDSHIP, payload: { id } })
  } catch (error) {
    console.log(error)
  }
}

export const denyRequest = id => async dispatch => {
  try {
    await updateFriendship(id, 'REJECTED')
    dispatch({ type: DENY_FRIENDSHIP, payload: { id } })
  } catch (error) {
    console.log(error)
  }
}

export const getFriendshipStatus = secondId => async (dispatch, getState) => {
  try {
    const friendReq = fetchFriendship(secondId, getState().user.id)
    const data = (await friendReq).data
    const status = data.friendship
      ? data.friendship.status !== 'REJECTED' ? data.friendship.status : 'NOT_FRIEND'
      : 'NOT_FRIEND'
    dispatch({ type: FETCH_FRIENDSHIP, payload: { id: secondId, friendshipStatus: status } })
  } catch (error) {
    console.log(error)
  }
}

export const initOtherUser = (id, username) => dispatch => {
  dispatch({ type: OTHER_USER_RESET })
  dispatch({ type: OTHER_USER_INIT, payload: { id, username } })
}
