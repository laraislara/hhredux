import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const VacanciesTableContainer = (props) => {
  const { data, isLoaded } = props.vacancies
  if (isLoaded) {
    return (
      <table>
        <thead>
          <tr>
            <td>Должность</td>
            <td>Компания</td>
            <td>Заработная плата, от</td>
            <td>Заработная плата, до</td>
            <td>Дата</td>
          </tr>
        </thead>
        <tbody>
        {Object.values(data).map(el => (
          <tr key={el.id}>
            <td>{el.name.slice(0,50)}</td>
            <td>{el.employer.name}</td>
            <td>{el.salary ? el.salary.from : 'Не указана'}</td>
            <td>{el.salary ? el.salary.to : 'Не указана'}</td>
            <td>{new Date(el.created_at).toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric'})}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
  return ''
}

VacanciesTableContainer.propTypes = {
  vacancies: PropTypes.objectOf(PropTypes.any).isRequired,
}

const mapStateToProps = createStructuredSelector({
  vacancies: createSelector(
    (state) => state.vacancies,
    (vacanciesState) => vacanciesState
  )
})

export default connect(mapStateToProps)(VacanciesTableContainer)
