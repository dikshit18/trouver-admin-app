import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import { apiEndpoints } from "../../utils/constants";
import { getCookie, deleteAllCookies } from "../../utils/cookies";

const detailsSuccess = details => {
  return {
    type: ACTIONS.DETAILS_SUCCESS,
    details
  };
};
const detailsFailure = error => {
  return {
    type: ACTIONS.DETAILS_FAILURE,
    error
  };
};

export const details = () => {
  return dispatch => {
    dispatch(loadingStart());
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    axios
      .get(apiEndpoints.details, config)
      .then(data => {
        if (data.data.statusCode === 200) {
          const { details } = data.data;
          dispatch(detailsSuccess(details));
        }
      })
      .catch(error => {
        dispatch(detailsFailure(error));
      });
  };
};

const loadingStart = () => {
  return {
    type: ACTIONS.LOADING_DETAILS
  };
};

export const logout = () => {
  return {
    type: ACTIONS.LOGOUT
  };
};

export const triggerLogout = () => {
  return dispatch => {
    deleteAllCookies();
    dispatch(logout());
  };
};
