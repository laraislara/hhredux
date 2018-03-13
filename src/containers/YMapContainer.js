import React from 'react';
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { YMaps, Map, ObjectManager } from 'react-yandex-maps';
// import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchVacancies } from 'actions/search'
import { changeMapState } from 'actions/maps'

export class YMapContainer extends React.Component {
  static propTypes = {
    vacancyName: PropTypes.string.isRequired,
    mapState: PropTypes.objectOf(PropTypes.any).isRequired,
    ymap: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchVacancies: PropTypes.func.isRequired,
    changeMapState: PropTypes.func.isRequired,
    metroStationValue: PropTypes.string.isRequired,
    selectedLine: PropTypes.objectOf(PropTypes.any).isRequired,
  }

  /* YAMP events
   * https://tech.yandex.ru/maps/doc/jsapi/2.0/ref/reference/Map-docpage/
   */
  onLoadMap = (event) => {
    const coords = event.originalEvent.map.getBounds()
    const center = event.originalEvent.map.getCenter()
    const zoom = event.originalEvent.map.getZoom()
    // обновление mapState
    this.props.changeMapState({
      center,
      zoom,
    })
    // аргумент пойдет в payload
    this.props.fetchVacancies({
      vacancyName: this.props.vacancyName,
      line: this.props.selectedLine,
      station: this.props.metroStationValue,
      top_lat: coords[1][0],
      bottom_lat: coords[0][0],
      left_lng: coords[0][1],
      right_lng: coords[1][1],
    })
  }
  render() {
    return (
      <YMaps>
        <Map
          state={this.props.mapState}
          width='100%'
          height={500}
          onBoundsChange={this.onLoadMap}
        >
        <ObjectManager
          options={{
            clusterize: true,
            gridSize: 32,
          }}
          objects={{
            preset: 'islands#blueDotIcon',
          }}
          clusters={{
            preset: 'islands#blueClusterIcons',
          }}
          features={this.props.ymap.data}
        />
        </Map>
      </YMaps >
    )
  }
}

const mapStateToProps = createStructuredSelector({
  mapState: createSelector(
    (state) => state.mapState,
    (mapState) => mapState
  ),
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
  ymap: createSelector(
    (state) => (
      {
        data: Object.values(state.vacancies.data).length > 0
          ? Object.values(state.vacancies.data)
            .filter(el => (el.address && el.address.lat && el.address.lng))
            .map(el => ({
              type: 'Feature',
              id: el.id,
              geometry: {
                type: 'Point',
                coordinates: [el.address.lat, el.address.lng],
              },
              properties: {
                balloonContentHeader: el.name,
                balloonContentBody: el.employer.name,
                balloonContentFooter: el.salary ?`${el.salary.from ? el.salary.from : 'Не указано'} - ${el.salary.to ? el.salary.to : 'Не указано'}` : '',
                clusterCaption: el.name,
                hintContent: el.name,
              },
              options: {
                preset: 'islands#blueCurcleDotIconWithCaption',
                iconCaptionMaxWidth: '70',
              },
            }))
          : [],
        count: state.vacancies.found,
      }
    ),
    (ymapState) => ymapState,
  ),
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchVacancies, changeMapState}, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(YMapContainer)
