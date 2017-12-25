import {
  createShow,
  createEpisode,
  createSeason,
  deleteEpisode,
  deleteSeason,
  deleteShow,
  updateShow,
  updateSeason,
  updateEpisode,
} from '../sources'

export const addShow = (show, params) => async dispatch => {
  try {
    await createShow(show, params)
  } catch (error) {
    console.log(error)
  }
}

export const removeShow = (show, params) => async dispatch => {
  try {
    await deleteShow(show)
  } catch (error) {
    console.log(error)
  }
}
