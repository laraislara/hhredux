import { combineReducers } from 'redux'
import {
  metroStationValue,
  metroStations,
  selectedLine,
  vacancies,
  vacancyName,
} from './search'
import { mapState } from './maps'


const rootReducer = combineReducers({
  metroStationValue,
  metroStations,
  selectedLine,
  vacancies,
  vacancyName,
  mapState,
})

export default rootReducer
