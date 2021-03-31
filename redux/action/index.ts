import { createAction, Action } from 'redux-actions';

import constant from '../../common/constant';

// score
const fetchGetBestScore: Action = createAction(constant.GET_BEST_SCORE_REQUEST);
const fetchUpdateBestScore: Action = createAction(constant.UPDATE_BEST_SCORE_REQUEST);

export {
  // score
  fetchGetBestScore,
  fetchUpdateBestScore,
};
