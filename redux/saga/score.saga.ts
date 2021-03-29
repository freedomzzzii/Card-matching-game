import { call, takeLatest, put, race } from 'redux-saga/effects';

import constant from '../../common/constant';
import { workerServiceGetAPI } from './service.saga';

function* workerGetBestScore(action) {
  yield call(workerServiceGetAPI, action);
}

export function* watcherGetBestScore() { // this is watcher for get BestScore
  yield race({ // race for check have same action type call twice time and cancel action
    response: yield takeLatest(constant.GET_BEST_SCORE_SUCCESS, workerGetBestScore), // compare action type for call worker to work process
    cancel: yield put({ 'type': constant.LOADING_GLOBAL_HIDE }), // cancel action on have same action type call twice time
  })
}
