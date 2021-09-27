import {
  FETCH_CASES,
  FETCH_CASES_SUCCESS,
  FETCH_CASES_FAIL,
  FETCH_WORLD_CASE,
  FETCH_WORLD_CASE_SUCCESS,
  FETCH_WORLD_CASE_FAIL,
  FETCH_FLAG_FAIL,
  FETCH_FLAG_SUCCESS,
  FETCH_FLAG,
} from "../constants/actionType";

//all cases reducer
export const cases = (state = { loading: true, cases: [] }, action) => {
  switch (action.type) {
    case FETCH_CASES:
      return { loading: true };
    case FETCH_CASES_SUCCESS:
      return { loading: false, cases: action.payload };
    case FETCH_CASES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// flag reducer
export const flag = (state = { loading: true, flag: [] }, action) => {
  switch (action.type) {
    case FETCH_FLAG:
      return { loading: true };
    case FETCH_FLAG_SUCCESS:
      return { loading: false, flag: action.payload };
    case FETCH_FLAG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
//all worldcases reducer
export const worldcase = (state = { loading: true, worldcase: [] }, action) => {
  switch (action.type) {
    case FETCH_WORLD_CASE:
      return { loading: true };
    case FETCH_WORLD_CASE_SUCCESS:
      return { loading: false, worldcase: action.payload };
    case FETCH_WORLD_CASE_FAIL:
      return { loading: false, worldcase: action.payload };
    default:
      return state;
  }
};
