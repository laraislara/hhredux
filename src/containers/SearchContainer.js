import React from 'react'
import PropTypes from 'prop-types'
import { Search } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SearchActions from 'actions/search'

export class SearchContainer extends React.Component {
  static propTypes = {
    vacancyName: PropTypes.string.isRequired,
    metroStationValue: PropTypes.string.isRequired,
    selectedLine: PropTypes.objectOf(PropTypes.any).isRequired,
    metroStations: PropTypes.objectOf(PropTypes.any).isRequired,
    changeMetroLine: PropTypes.func.isRequired,
    changeMetroStation: PropTypes.func.isRequired,
    fetchMetroStations: PropTypes.func.isRequired,
    fetchVacancies: PropTypes.func.isRequired,
  }

  componentWillMount = () => {
    this.props.fetchMetroStations()
  }
  changeMetroLine = event => {
    // metroStations.data --> linesMap[id]
    const metroLine = this.props.metroStations.data[event.target.value]
    this.props.changeMetroLine(metroLine)

  }
  changeMetroStation = event => {
    this.props.changeMetroStation(event.target.value)
  }
  handleSearchSubmit = (value) => {
    // агрументы пойдут в action.payload
    this.props.fetchVacancies({
      vacancyName: value,
      line: this.props.selectedLine,
      station: this.props.metroStationValue,
    })
  }

  render() {
    return (
      <div>
      <Search
        vacancyName={this.props.vacancyName}
        metroStations={this.props.metroStations}
        metroStationValue={this.props.metroStationValue}
        selectedLine={this.props.selectedLine}
        changeMetroLine={this.changeMetroLine}
        changeMetroStation={this.changeMetroStation}
        onSearchSubmit={this.handleSearchSubmit}
      />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  vacancyName: createSelector(
    (state) => state.vacancyName,
    (vacancyNameState) => vacancyNameState
  ),
   selectedLine: createSelector(
    (state) => state.selectedLine,
    (selectedLineState) => selectedLineState
  ),
   metroStationValue: createSelector(
    (state) => state.metroStationValue,
    (metroStationValueState) => metroStationValueState
  ),
  metroStations: createSelector(
    (state) => state.metroStations,
    (metroStationsState) => metroStationsState,
  ),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(SearchActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
