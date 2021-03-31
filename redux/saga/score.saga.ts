import { takeLatest, put, race, take, call, delay, takeEvery, fork, cancel } from 'redux-saga/effects';

import constant from '../../common/constant';
import { workerServiceGetAPI, workerServicePostAPI } from './service.saga';

type actionGetBestScoreType = {
  type: string,
}
type actionUpdateBestScoreType = {
  type: string,
  payload: {
    score: number,
  },
}

function* workerGetBestScore(action: actionGetBestScoreType) {
  yield workerServiceGetAPI({
    ...action,
    pathAPI: '/best-score',
    typeSuccess: constant.GET_BEST_SCORE_SUCCESS,
    typeFailure: constant.GET_BEST_SCORE_FAILURE,
  });
}

export function* watcherGetBestScore() {
  const action = yield take(constant.GET_BEST_SCORE_REQUEST);
  yield fork(workerGetBestScore, action);
}

function* workerUpdateBestScore(action: actionUpdateBestScoreType) {
  yield workerServicePostAPI({
    ...action,
    pathAPI: '/best-score',
    typeSuccess: constant.UPDATE_BEST_SCORE_SUCCESS,
    typeFailure: constant.UPDATE_BEST_SCORE_FAILURE,
  });
}

export function* watcherUpdateBestScore() {
  const action = yield take(constant.UPDATE_BEST_SCORE_REQUEST);
  yield fork(workerUpdateBestScore, action);
}
