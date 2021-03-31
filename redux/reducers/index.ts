import { combineReducers } from 'redux';

import { globalBestScore } from './score.reducer';

import { loading } from './loading.reducer';

export default combineReducers({
  // score
  globalBestScore,
  // loading
  loading,
});
