import { combineReducers } from 'redux';

import { bestScore } from './score.reducer';

const reducers = {
  // score
  bestScore,
};

const rootReducer = combineReducers(reducers);

export {
  reducers,
  rootReducer,
};
