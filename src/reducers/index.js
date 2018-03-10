import { combineReducers } from 'redux'
import {
  metroStationName,
  metroStations,
  selectedLine,
  vacancies,
} from './search'


const rootReducer = combineReducers({
  metroStationName,
  metroStations,
  selectedLine,
  vacancies,
})

export default rootReducer
