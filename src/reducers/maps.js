import { MAP_STATE_UPDATED } from 'constants/ActionTypes'
import { initialMapState } from 'initialStates'

export const mapState = (state = initialMapState, action) => {
  switch (action.type) {
    case MAP_STATE_UPDATED:
      return action.payload
    default:
      return state
  }
}
