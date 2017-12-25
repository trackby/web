/* eslint-disable eqeqeq */
import { ADD_FRIEND, FETCH_FRIENDSHIP, REMOVE_FRIEND, OTHER_USER_RESET, OTHER_USER_INIT } from 'constants/ActionTypes'

const initialState = {
  id: -1,
  fetched: false,
  friendshipStatus: 'NOT_FRIEND',
}

export default function otherUser(state = initialState, action) {
  switch (action.type) {
    case OTHER_USER_RESET:
      return initialState
    case OTHER_USER_INIT:
      return { ...state, ...action.payload }
    case ADD_FRIEND:
      if (action.payload.id == state.id) {
        return { ...state, fetched: true, friendshipStatus: 'PENDING' }
      }
      return state
    case REMOVE_FRIEND:
      if (action.payload.id == state.id) {
        return { ...state, fetched: true, friendshipStatus: 'NOT_FRIEND' }
      }
      return state
    case FETCH_FRIENDSHIP:
      if (action.payload.id == state.id) {
        return { ...state, fetched: true, friendshipStatus: action.payload.friendshipStatus }
      }
      return state
    default:
      return state
  }
}
