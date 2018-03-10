import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

const Select = ({ options, value, onChange }) => (
    <select value={value} onChange={onChange}>
      {options.map(item => (
          <option key={item.id}
                  value={item.id}
                  label={item.name}>
            {item.name}
          </option>
        ))
      }
    </select>
  )

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default pure(Select)
