/* eslint-disable eqeqeq */
import { FETCH_REPORTS } from 'constants/ActionTypes'

const initialState = {
  reports: null,
}

export default function report(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPORTS:
      return { state, ...action.payload }
    default:
      return state
  }
}
