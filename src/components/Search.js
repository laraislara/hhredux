import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Select } from 'components'

// import styled from 'styled-components'

// const Intro = styled.p`font-size: large;`

class Search extends React.Component {
  static propTypes = {
    metroStationValue: PropTypes.string.isRequired,
    selectedLine: PropTypes.objectOf(PropTypes.string).isRequired,
    metroStations: PropTypes.objectOf(PropTypes.any).isRequired,
    changeMetroLine: PropTypes.func.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    changeMetroStation: PropTypes.func.isRequired,
  }

  onSearchSubmit = event => {
    event.preventDefault()
    const {value} = this.searchValue
    this.props.onSearchSubmit(value)
  }

  render () {
    const {
      selectedLine,
      metroStationValue,
      metroStations,
      changeMetroLine,
      changeMetroStation,
    } = this.props
    return (
      <section>
        <form onSubmit={this.onSearchSubmit}>
          {metroStations.isLoaded &&
            <Select onChange={changeMetroLine}
                    value={selectedLine.id}
                    options={Object.values(metroStations.data).map(el => ({
                      id: el.id,
                      name: el.name,
                      color: el.hex_color,
                    }))}/>
          }
          {selectedLine.id && <Select onChange={changeMetroStation}
                  value={metroStationValue}
                  options={metroStations.data[selectedLine.id].stations.map(el => ({
                    id: el.id,
                    name: el.name,
                  }))}
          />}
          <input ref={(input) => {this.searchValue = input}}/>
          <button type='submit'>Поиск</button>
        </form>
      </section>
    )
  }
}

export default pure(Search)
