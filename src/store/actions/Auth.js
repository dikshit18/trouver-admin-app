import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import { apiEndpoints } from "../../utils/constants";
import { setCookie, deleteAllCookies, getCookie } from "../../utils/cookies";
import { history } from "../../utils/history";

const loginSuccess = () => {
  return {
    type: ACTIONS.LOGIN_SUCCESS
  };
};
const loginFailure = error => {
  return {
    type: ACTIONS.LOGIN_FAILURE,
    error
  };
};

export const login = (username, password) => {
  return dispatch => {
    dispatch(loadingStart());
    const payload = {
      email: username,
      password
    };
    axios
      .post(apiEndpoints.login, payload)
      .then(data => {
        if (data.data.statusCode === 200) {
          const { sessionId } = data.data;
          const { IdToken } = data.data.tokens;
          setCookie("sessionId", sessionId);
          setCookie("idToken", IdToken);
          //setCookie("expiry", expiry);
        }
        dispatch(loginSuccess());
        history.push("/dashboard");
      })
      .catch(error => {
        dispatch(loginFailure(error));
      });
  };
};

const loadingStart = () => {
  return {
    type: ACTIONS.LOADING_START
  };
};

const logoutSuccess = () => {
  return {
    type: ACTIONS.LOGOUT_SUCCESS
  };
};
const logoutFailure = error => {
  return {
    type: ACTIONS.LOGOUT_FAILURE,
    error
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(loadingStart());
    const sessionId = getCookie("sessionId");
    const idToken = getCookie("idToken");
    const config = {
      headers: { Authorization: idToken }
    };
    if (!sessionId || !idToken) {
      dispatch(logoutSuccess());
    } else {
      axios
        .delete(`${apiEndpoints.sessionValidity}/${sessionId}`, config)
        .then(_ => {
          deleteAllCookies();
          dispatch(logoutSuccess());
        })
        .catch(error => dispatch(logoutFailure()));
    }
  };
};
