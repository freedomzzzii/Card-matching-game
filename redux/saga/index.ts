import { all } from 'redux-saga/effects';

import { watcherGetBestScore, watcherUpdateBestScore } from './score.saga';

export default function* rootSaga() {
  yield all([
    // score
    watcherGetBestScore(),
    watcherUpdateBestScore(),
  ]);
}
