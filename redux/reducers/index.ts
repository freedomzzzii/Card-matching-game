import { combineReducers } from 'redux';

import { globalBestScore } from './score.reducer';

const reducers = {
  // score
  globalBestScore,
};

const rootReducer = combineReducers(reducers);

export {
  reducers,
  rootReducer,
};
