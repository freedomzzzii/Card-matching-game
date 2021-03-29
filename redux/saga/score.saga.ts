import { takeLatest, put, race } from 'redux-saga/effects';

import constant from '../../common/constant';
import { workerServiceGetAPI } from './service.saga';

function* workerGetBestScore(action) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: '/best-score',
    typeSuccess: constant.GET_BEST_SCORE_SUCCESS,
    typeFailure: constant.GET_BEST_SCORE_FAILURE,
  });
}

export function* watcherGetBestScore() {
  yield race({
    response: yield takeLatest(constant.GET_BEST_SCORE_REQUEST, workerGetBestScore),
    cancel: yield put({ type: constant.LOADING_GLOBAL_HIDE }),
  })
}
