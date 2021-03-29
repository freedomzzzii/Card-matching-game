import { initialStateType } from './type'

type constantType = {
  host: string,
  LOADING_GLOBAL_SHOW: string,
  LOADING_GLOBAL_HIDE: string,
  GET_BEST_SCORE_REQUEST: string,
  GET_BEST_SCORE_SUCCESS: string,
  GET_BEST_SCORE_FAILURE: string,
  initialState: initialStateType,
};

const constant: constantType = {
  //  host
  host: process.env.NODE_ENV,
  // action type
  LOADING_GLOBAL_SHOW: 'LOADING_GLOBAL_SHOW',
  LOADING_GLOBAL_HIDE: 'LOADING_GLOBAL_HIDE',
  GET_BEST_SCORE_REQUEST: 'GET_BEST_SCORE_REQUEST',
  GET_BEST_SCORE_SUCCESS: 'GET_BEST_SCORE_SUCCESS',
  GET_BEST_SCORE_FAILURE: 'GET_BEST_SCORE_FAILURE',
  // type
  initialState: {},
};

export default constant;