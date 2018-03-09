import { call, put, takeLatest } from 'redux-saga/effects'
import {
  METRO_FETCH_SUCCEEDED,
  METRO_FETCH_FAILED,
  METRO_FETCH_REQUESTED,
} from 'constants/ActionTypes'
import fork from 'redux-saga'
import {fetchMetroData} from 'fetchers'

function* fetchMetroStations() {
   try {
      const metroStations = yield call(fetchMetroData);
      yield put({type: METRO_FETCH_SUCCEEDED, metroStations});
   } catch (e) {
      yield put({type: METRO_FETCH_FAILED, message: e.message});
   }
}

function* metroSaga() {
  yield takeLatest(METRO_FETCH_REQUESTED, fetchMetroStations);
}

function* rootSaga () {
    yield [
        fork(metroSaga),
        // fork(saga2),
    ];
}

export default rootSaga;
