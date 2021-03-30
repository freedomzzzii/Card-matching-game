import constant from '../../common/constant';
import { actionDefaultType } from '../../common/type'

export const globalBestScore = (state = constant.initialState, action: actionDefaultType) => {
  switch (action.type) {
    case constant.GET_BEST_SCORE_REQUEST:
      return Object.assign({}, state, { ...action });
    case constant.GET_BEST_SCORE_SUCCESS:
      return Object.assign({}, state, { ...action });
    case constant.GET_BEST_SCORE_FAILURE:
      return Object.assign({}, state, { ...action });
    default:
      return state ? state : constant.initialState;
  }
};