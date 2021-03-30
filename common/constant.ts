import { initialStateType, initialStateLoadingType } from './type'

type constantType = {
  host: string,
  cards: string,
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
  measurementId: string,
  LOADING_GLOBAL_SHOW: string,
  LOADING_GLOBAL_HIDE: string,
  GET_BEST_SCORE_REQUEST: string,
  GET_BEST_SCORE_SUCCESS: string,
  GET_BEST_SCORE_FAILURE: string,
  UPDATE_BEST_SCORE_REQUEST: string,
  UPDATE_BEST_SCORE_SUCCESS: string,
  UPDATE_BEST_SCORE_FAILURE: string,
  initialState: initialStateType,
  initialLoadingState: initialStateLoadingType,
};

const constant: constantType = {
  //  env
  host: process.env.NEXT_PUBLIC_HOST_API,
  cards: process.env.NEXT_PUBLIC_NUMBER_CARD,
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
  // action type
  LOADING_GLOBAL_SHOW: 'LOADING_GLOBAL_SHOW',
  LOADING_GLOBAL_HIDE: 'LOADING_GLOBAL_HIDE',
  GET_BEST_SCORE_REQUEST: 'GET_BEST_SCORE_REQUEST',
  GET_BEST_SCORE_SUCCESS: 'GET_BEST_SCORE_SUCCESS',
  GET_BEST_SCORE_FAILURE: 'GET_BEST_SCORE_FAILURE',
  UPDATE_BEST_SCORE_REQUEST: 'UPDATE_BEST_SCORE_REQUEST',
  UPDATE_BEST_SCORE_SUCCESS: 'UPDATE_BEST_SCORE_SUCCESS',
  UPDATE_BEST_SCORE_FAILURE: 'UPDATE_BEST_SCORE_FAILURE',
  // state redux
  initialState: {},
  initialLoadingState: {
    count: 0,
  },
};

export default constant;
