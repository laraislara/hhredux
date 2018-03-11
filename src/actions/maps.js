import { createAction } from 'redux-actions'
import { MAP_STATE_UPDATED } from 'constants/ActionTypes'

export const changeMapState = createAction(MAP_STATE_UPDATED)
