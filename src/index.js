import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
// import { browserHistory } from 'react-router';
import Routes from 'routes'
// import { syncHistoryWithStore } from 'react-router-redux';
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'

// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
