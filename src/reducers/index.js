import { combineReducers } from 'redux'
import {
  metroStationValue,
  metroStations,
  selectedLine,
  vacancies,
} from './search'


const rootReducer = combineReducers({
  metroStationValue,
  metroStations,
  selectedLine,
  vacancies,
})

export default rootReducer
