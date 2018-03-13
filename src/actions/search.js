import {
  CHANGE_METRO_LINE,
  CHANGE_METRO_STATION,
  METRO_FETCH_REQUESTED,
  VACANCIES_FETCH_REQUESTED,
} from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const changeMetroStation = createAction(CHANGE_METRO_STATION)
export const changeMetroLine = createAction(CHANGE_METRO_LINE)
export const fetchMetroStations = createAction(METRO_FETCH_REQUESTED)
export const fetchVacancies = createAction(VACANCIES_FETCH_REQUESTED)

/*export const fetchVacancies = function fetchVacancies(payload) {
  return {
    type: VACANCIES_FETCH_REQUESTED,
    payload: payload,
  }
}*/
