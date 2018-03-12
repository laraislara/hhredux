import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { Select } from 'components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Intro = styled.form`
  margin-bottom: 40px;
  height: 30px;
  
  select {
    height: 25px;
    width: 300px;
    font-size: 15px;
    margin: 10px;
    padding-left: 10px;
  }
  
  input {
    height: 20px;
    width: 200px;
    font-size: 15px;
    margin: 10px;
    padding-left: 10px;
  }
  
  button {
    height: 30px;
    width: 65px;
    font-size: 15px;
    border-radius: 5px;
    margin: 10px;
  }
  
  button:hover {
    cursor: pointer;
  }
`

export class Search extends React.Component {
  static propTypes = {
    metroStationValue: PropTypes.string.isRequired,
    selectedLine: PropTypes.objectOf(PropTypes.any).isRequired,
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
      <Intro>
      <section>
        <form onSubmit={this.onSearchSubmit}>
          {metroStations.isLoaded &&
            <Select onChange={changeMetroLine}
                    value={selectedLine.id}
                    options={Object.values(metroStations.data).map(el => ({
                      id: el.id,
                      name: el.name,
                      hex_color: el.hex_color,
                    }))}/>
          }
          {selectedLine.id && <Select onChange={changeMetroStation}
                  value={metroStationValue}
                  options={metroStations.data[selectedLine.id].stations.map(el => ({
                    id: el.id,
                    name: el.name,
                  }))}
          />}
          <input ref={(input) => {this.searchValue = input}} placeholder='Я ищу...'/>
          <button type='submit'>Поиск</button>
      {/*  <Link to='/map'>55</Link>*/}
        </form>
      </section>
      </Intro>
    )
  }
}

export default pure(Search)
