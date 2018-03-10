import { HttpApiCallError } from 'errors'

const API_HH_URL = 'https://api.hh.ru/'

async function fetchMetroData() {
  const response = await fetch(`${API_HH_URL}metro/1`)
  const data = await response.json()
  if (response.status === 200) {
    const linesMap = {}
    for (const el of data.lines) {
      // каждый объект присваиваем к id
      // (который берем из самого объекта)
      linesMap[el.id] = el
    }
    return linesMap
  }
  throw new HttpApiCallError(
    data.message || response.statusText,
    response.status,
  )
}

async function fetchVacancyData({vacancyName, line, station}) {
  const response = await fetch(
    `${API_HH_URL}vacancies?metro=${station || line.id}&area=1&text=${vacancyName}`
  )
  const data = await response.json()
  if (response.status === 200) {
    const dataMap = {}
    for (const el of data.items) {
      dataMap[el.id] = el
    }
    return {
      data: dataMap,
      found: data.found,
      pages: data.pages,
      per_page: data.per_page,
      page: data.page,
    }
  }
  throw new HttpApiCallError(
    data.message || response.statusText,
    response.status,
  )
}

export { fetchMetroData, fetchVacancyData }
