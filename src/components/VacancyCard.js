import React from 'react'
import PropTypes from 'prop-types'
// import pure from 'recompose/pure'
// import styled from 'styled-components'
import {connect} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const VacancyCard = (props) => {

}

VacancyCard.propTypes = {
  vacancies: PropTypes.objectOf(PropTypes.any).isRequired,
}

const mapStateToProps = createStructuredSelector({
  vacancies: createSelector(
    (state) => state.vacancies,
    (vacanciesState) => vacanciesState
  )
})

export default connect(mapStateToProps)(VacancyCard)
