import {
  CHANGE_METRO_LINE,
  CHANGE_METRO_STATION,
  // SEARCH_SUBMIT,
} from 'constants/ActionTypes'

const initialMetroStationName = ''

export const metroStationName = (state = initialMetroStationName, action) => {
  switch (action.type) {
    case CHANGE_METRO_STATION:
      return action.payload
    default:
      return state
  }
}

const initialMetroLineName = ''

export const metroLineName = (state = initialMetroLineName, action) => {
   switch (action.type) {
    case CHANGE_METRO_LINE:
      return action.payload
    default:
      return state
  }
}
