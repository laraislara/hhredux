import { combineReducers } from 'redux'
import counter from './counter'
import { metroLineName, metroStationName} from './search'


const rootReducer = combineReducers({
  counter, metroStationName, metroLineName
})

export default rootReducer
