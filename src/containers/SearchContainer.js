import React from 'react'
import PropTypes from 'prop-types'
import { Search } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SearchActions from 'actions/search'

class SearchContainer extends React.Component {
  static propTypes = {
    // vacancyName: PropTypes.string.isRequired,
    metroLineName: PropTypes.string.isRequired,
    metroStationName: PropTypes.string.isRequired,
    changeMetroLine: PropTypes.func.isRequired,
    changeMetroStation: PropTypes.func.isRequired,
    // handleSearchSubmit: PropTypes.func.isRequired,
  }
  changeMetroLine = (event) => {
    this.props.changeMetroLine(event.target.value)
  }
  changeMetroStation = (event) => {
    this.props.changeMetroStation(event.target.value)
  }
  handleSearchSubmit = (event, value) => {
    event.preventDefault()
    this.props.handleSearchSubmit(value, this.props.metroLineName, this.props.metroStationName)
  }

  render() {
    return (
      <div>
      <Search
        vacancyName={this.props.vacancyName}
        metroLineName={this.props.metroLineName}
        metroStationName={this.props.metroStationName}
        changeMetroLine={this.changeMetroLine}
        changeMetroStation={this.changeMetroStation}
        onSearchSubmit={this.handleSearchSubmit}
      />
        <p>Вы выбрали {this.props.metroLineName} {this.props.metroStationName}</p>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  vacancyName: createSelector(
    (state) => state.vacancyName,
    (vacancyNameState) => vacancyNameState
  ),
   metroLineName: createSelector(
    (state) => state.metroLineName,
    (metroLineNameState) => metroLineNameState
  ),
   metroStationName: createSelector(
    (state) => state.metroStationName,
    (metroStationNameState) => metroStationNameState
  ),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(SearchActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
