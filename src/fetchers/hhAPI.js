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

async function fetchVacancyData(payload) {
  const {
    vacancyName,
    line,
    station,
    top_lat,
    bottom_lat,
    left_lng,
    right_lng,
  } = payload
  const vacanciesUrl = `${API_HH_URL}vacancies?area=1&per_page=100`
  const metroQuery = `&metro=${station || line.id}`
  const topLatQuery = top_lat ? `&top_lat=${top_lat}` : ''
  const bottomLatQuery = bottom_lat ? `&bottom_lat=${bottom_lat}` : ''
  const leftLngQuery = left_lng ? `&left_lng=${left_lng}` : ''
  const rightLngQuery = right_lng ? `&right_lng=${right_lng}` : ''
  const vacancyTextQuery = `&text=${vacancyName || ''}`
  const finalUrl = `${vacanciesUrl}${metroQuery}${topLatQuery}${bottomLatQuery}${leftLngQuery}${rightLngQuery}${vacancyTextQuery}`
  const response = await fetch(finalUrl)

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
