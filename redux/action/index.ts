import { createAction, Action } from 'redux-actions';

import constant from '../../common/constant';

const fetchGetBestScore: Action = createAction(constant.GET_BEST_SCORE_REQUEST)

export {
  fetchGetBestScore,
};
