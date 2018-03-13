import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import { YMaps, Map, ObjectManager } from 'react-yandex-maps';

const VacancyStyle = styled.div`
  width: 50%;
  text-align: left;
  margin-left: 100px;
  
  p {
    line-height: 1.5;
  }
`

const VacancyCard = ({match, vacancies}) => {
    const vacancy = vacancies[match.params.id]
    return (
      <VacancyStyle>
        <div>
          <h2>{vacancy.name}</h2>
          <span>{vacancy.salary ? (vacancy.salary.from ? `от ${vacancy.salary.from}` : '') : ''}</span>
          <span>{vacancy.salary ? (vacancy.salary.to ? ` до ${vacancy.salary.to}` : '') : ''}</span>
          <span>{vacancy.salary? ` ${vacancy.salary.currency}` : ''}</span>
          <p>Требования:</p>
          <p>{vacancy.snippet.requirement}</p>
          <p>Должностные обязанности:</p>
          <p>{vacancy.snippet.responsibility}</p>
          <p>{vacancy.key_skills}</p>
        {/*  {vacancy.address && <Map data={[vacancy]}/>}*/}
        </div>
      </VacancyStyle>
      )
}

VacancyCard.propTypes = {
  vacancies: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

const mapStateToProps = createStructuredSelector({
  vacancies: createSelector(
    (state) => state.vacancies.data,
    (vacanciesState) => vacanciesState
  )
})

export default connect(mapStateToProps)(VacancyCard)
