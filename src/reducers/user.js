/* eslint-disable eqeqeq */
import {
  ADD_FRIEND,
  APPROVE_FRIENDSHIP,
  AUTH_LOGIN_SUCCESS,
  DENY_FRIENDSHIP,
  GET_FRIENDS,
  GET_FRIENDSHIP_REQUESTS,
  REMOVE_FRIEND,
} from 'constants/ActionTypes'

const initialState = {
  friends: [],
  friendshipRequests: [],
  friendsFetched: false,
  friendshipRequestsFetched: false,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return { ...state, username: action.payload.username, id: action.payload.id, isAdmin: action.payload.isAdmin }
    case GET_FRIENDS:
      return { ...state, friendsFetched: true, friends: action.payload }
    case GET_FRIENDSHIP_REQUESTS:
      return { ...state, friendshipRequestsFetched: true, friendshipRequests: action.payload }
    case APPROVE_FRIENDSHIP:
      return {
        ...state,
        friendshipRequests: state.friendshipRequests.filter(r => r.id != action.payload.id),
        friends: [state.friendshipRequests.find(f => f.id == action.payload.id), ...state.friends],
      }
    case DENY_FRIENDSHIP:
      return { ...state, friendshipRequests: state.friendshipRequests.filter(r => r.id != action.payload.id) }
    case ADD_FRIEND:
      return { ...state, friendshipRequests: [action.payload, ...state.friendshipRequests] }
    case REMOVE_FRIEND:
      return { ...state, friends: state.friends.filter(f => f.id != action.payload.id) }
    default:
      return state
  }
}
