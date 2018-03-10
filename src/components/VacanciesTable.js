import React from 'react'
import pure from 'recompose/pure'
import PropTypes from 'prop-types'


const VacanciesTable = ({vacancies}) => {
  const { data, isLoaded } = vacancies
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


VacanciesTable.propTypes = {
  vacancies: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default pure(VacanciesTable)
