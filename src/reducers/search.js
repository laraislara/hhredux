import {
  CHANGE_METRO_LINE,
  CHANGE_METRO_STATION,
  METRO_FETCH_FAILED,
  METRO_FETCH_SUCCEEDED,
  VACANCIES_FETCH_SUCCEEDED,
  VACANCIES_FETCH_FAILED,
  VACANCIES_FETCH_REQUESTED,
} from 'constants/ActionTypes'
import {
  initialSelectedMetroLine,
  initialMetroStations,
  initialVacancies,
} from 'initialStates'
import { fromJS } from 'immutable'

const initialMetroStationValue = ''

export const metroStationValue = (state = initialMetroStationValue, action) => {
  switch (action.type) {
    case CHANGE_METRO_STATION:
      return action.payload
    case METRO_FETCH_SUCCEEDED:
      return action.payload['1'].stations[0].id
    default:
      return state
  }
}

export const metroStations = (state = initialMetroStations, action) => {
  switch (action.type) {
    case METRO_FETCH_SUCCEEDED:
      return {
        // data: linesMap
        data: action.payload,
        isLoaded: true,
      }
    case METRO_FETCH_FAILED:
      return action.error
    default:
      return state
  }
}

export const selectedLine = (state = initialSelectedMetroLine, action) => {
  switch (action.type) {
    case CHANGE_METRO_LINE:
      // linesMap[id]
      return action.payload
    case METRO_FETCH_SUCCEEDED:
      // linesMap
      return action.payload['1']
    default:
      return state
  }
}

const initialVacancyName = ''

export const vacancyName = (state = initialVacancyName, action) => {
  switch (action.type) {
    case VACANCIES_FETCH_REQUESTED:
      return action.payload.vacancyName
    default:
      return state
  }
}

export const vacancies = (state = initialVacancies, action) => {
  switch (action.type) {
    case VACANCIES_FETCH_SUCCEEDED:
      return {
        data: action.payload.data,
        found: action.payload.found,
        pages: action.payload.pages,
        per_page: action.payload.per_page,
        page: action.payload.page,
        isLoaded: true,
      }
    case VACANCIES_FETCH_FAILED:
      return action.error
    default:
      return state
  }
}

// redux-actions -- handleAction ?
