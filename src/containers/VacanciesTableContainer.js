import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { VacancyCard } from 'components'

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  
  td {
    height: 50px;
    padding: 0 10px;
  }
  
  thead {
    font-weight: bold; 
  }
  
  tbody {
    text-align: left;
    border: 1px solid black;
  }
`

const VacanciesTableContainer = (props) => {
  const { data, isLoaded } = props.vacancies
  if (isLoaded) {
    return (
      <Table>
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
              <td><Link to ={`/vacancies/${el.id}`}>{el.name}</Link></td>
              <td>{el.employer.name}</td>
              <td>{el.salary ? el.salary.from : ''}</td>
              <td>{el.salary ? el.salary.to : ''}</td>
              <td>{new Date(el.created_at).toLocaleString('ru', {year: 'numeric', month: 'numeric', day: 'numeric'})}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </Table>
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
