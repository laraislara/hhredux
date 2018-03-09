import React from 'react'
import ReactDOM from 'react-dom'
import { VolodyaContainer } from 'containers'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<VolodyaContainer />, div)
})
