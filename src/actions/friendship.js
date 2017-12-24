import {
  ADD_FRIEND,
  APPROVE_FRIENDSHIP,
  DENY_FRIENDSHIP,
  GET_FRIENDS,
  GET_FRIENDSHIP_REQUESTS,
  REMOVE_FRIEND,
} from 'constants/ActionTypes'

import { createFriendship, fetchFriends, fetchFriendshipRequests, removeFriendship, updateFriendship } from 'sources'

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
    dispatch({ type: ADD_FRIEND, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const removeFriend = id => async dispatch => {
  try {
    await removeFriendship(id)
    dispatch({ type: REMOVE_FRIEND })
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
