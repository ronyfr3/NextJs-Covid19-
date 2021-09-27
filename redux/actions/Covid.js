import {
  FETCH_CASES_SUCCESS,
  FETCH_CASES_FAIL,
  FETCH_WORLD_CASE_SUCCESS,
  FETCH_WORLD_CASE_FAIL,
  FETCH_FLAG_SUCCESS,
  FETCH_FLAG_FAIL,
} from "../constants/actionType";
import * as api from "../api";

//GET_ALL_CASES_FROM APIs
export const cases = (country) => async (dispatch) => {
  // console.log("country::", country);
  try {
    const { data } = await api.cases(country);
    // console.log("cases", data);
    dispatch({
      type: FETCH_CASES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CASES_FAIL,
      payload: "fail",
    });
  }
};
// GET FLAG
export const flag = () => async (dispatch) => {
  try {
    const { data } = await api.flag();
    console.log("cases", data);

    dispatch({
      type: FETCH_FLAG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_FLAG_FAIL,
      payload: "fail",
    });
  }
};
//GET_WORLD_CASE_FROM APIs
export const worldcase = () => async (dispatch) => {
  try {
    const { data } = await api.worldcase();
    // console.log("wordcase", data);
    dispatch({
      type: FETCH_WORLD_CASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_WORLD_CASE_FAIL,
      payload: error.message,
    });
  }
};
