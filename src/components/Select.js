import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

const Select = ({ options, value, onChange }) => (
    <select value={value || '0'} onChange={onChange} >
      <option value='0' disabled>Выберите станцию</option>
      {options.map(item => (
          <option key={item.id}
                  value={item.id}
                  label={item.name}
                  style={{backgroundColor: `#${item.hex_color}` || ''}}>
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
