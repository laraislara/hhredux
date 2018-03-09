import {
  CHANGE_METRO_LINE,
  CHANGE_METRO_STATION,
  SEARCH_SUBMIT,
  METRO_FETCH_REQUESTED,
} from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const changeMetroStation = createAction(CHANGE_METRO_STATION)
export const changeMetroLine = createAction(CHANGE_METRO_LINE)
export const handleSearchSubmit = createAction(SEARCH_SUBMIT)
export const fetchMetroStations = createAction(METRO_FETCH_REQUESTED)
