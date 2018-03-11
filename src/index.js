import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import Routes from 'routes'
import {
  initialSelectedMetroLine,
  initialMetroStations,
  initialVacancies,
  initialMapState,
} from 'initialStates'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'

const store = configureStore({
  selectedLine: initialSelectedMetroLine,
  metroStations: initialMetroStations,
  vacancies: initialVacancies,
  mapState: initialMapState,
})

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
