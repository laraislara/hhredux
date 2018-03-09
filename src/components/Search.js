import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

// import styled from 'styled-components'

// const Intro = styled.p`font-size: large;`

class Search extends React.Component {
  static propTypes = {
    metroLineName: PropTypes.string.isRequired,
    metroStationName: PropTypes.string.isRequired,
    changeMetroLine: PropTypes.func.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    changeMetroStation: PropTypes.func.isRequired,
  }

  onSearchSubmit = event => {
    const {value} = this.searchValue
    this.props.onSearchSubmit(event, value)
  }

  render () {
    const {
      metroLineName,
      metroStationName,
      changeMetroLine,
      changeMetroStation,
      onSearchSubmit,
    } = this.props
    return (
      <section>
        <form onSubmit={onSearchSubmit}>
          <select onChange={changeMetroLine} value={metroLineName}>
            <option>Выберите ветку</option>
            <option value='1'>Калужско-Рижская</option>
            <option value='2'>Сокольническая</option>
            <option value='3'>Замоскворецкая</option>
          </select>
          <select onChange={changeMetroStation}
                  value={metroStationName}>
            <option>Выберите станцию</option>
            <option value='1'>Беляево</option>
            <option value='2'>Коньково</option>
            <option value='3'>Теплый Стан</option>
          </select>
          <input ref={(input) => {this.searchValue = input}}/>
          <button>Поиск</button>
        </form>
      </section>
    )
  }
}


export default pure(Search)
