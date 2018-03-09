import { HttpApiCallError } from 'errors'

const API_HH_URL = 'https://api.hh.ru/'

async function fetchMetroData() {
  const response = await fetch(`${API_HH_URL}metro/1`)
  const data = await response.json()
  if (response.status === 200) {
    // let stations = []
    // for (const line of data.lines) {
    //   for (const station of line.stations) {
    //     stations.push({
    //       label: station.name,
    //       line: line.name,
    //       id: station.id,
    //     })
    //   }
    // }
    return data
  }
  throw new HttpApiCallError(
    data.message || response.statusText,
    response.status,
  )
}

export default fetchMetroData
