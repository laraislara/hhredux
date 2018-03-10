import { fork, call, put, takeLatest } from 'redux-saga/effects'
import {
  METRO_FETCH_SUCCEEDED,
  METRO_FETCH_FAILED,
  METRO_FETCH_REQUESTED,
  VACANCIES_FETCH_SUCCEEDED,
  VACANCIES_FETCH_FAILED,
  VACANCIES_FETCH_REQUESTED,
} from 'constants/ActionTypes'
import {fetchMetroData, fetchVacancyData} from 'fetchers'

// metro API worker
function* fetchMetroStations() {
   try {
      const payload = yield call(fetchMetroData)
      // вызов метода METRO_FETCH_SUCCEEDED и передача LinesMap в payload
      yield put({type: METRO_FETCH_SUCCEEDED, payload})
   } catch (e) {
      yield put({type: METRO_FETCH_FAILED, message: e.message})
   }
}

// watcher
function* metroSaga() {
  yield takeLatest(METRO_FETCH_REQUESTED, fetchMetroStations)
}

// vacancies API worker
function * fetchVacancies(action) {
  try {
    const payload = yield call(fetchVacancyData, action.payload)
    yield put({type: VACANCIES_FETCH_SUCCEEDED, payload})
  } catch (e) {
    yield put({type: VACANCIES_FETCH_FAILED, message: e.message})
  }
}

function*  vacanciesSaga() {
  yield takeLatest(VACANCIES_FETCH_REQUESTED, fetchVacancies)
}

// объединение фетчеров(саг)
function* rootSaga () {
    yield [
        fork(metroSaga),
        fork(vacanciesSaga),
    ];
}

export default rootSaga;
