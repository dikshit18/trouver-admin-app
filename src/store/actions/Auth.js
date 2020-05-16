import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import { apiEndpoints } from "../../utils/constants";
import { setCookie, getCookie, deleteAllCookies } from "../../utils/cookies";
import moment from "moment";
import { history } from "../../utils/history";
import checkSessionValidity from "../../utils/sessionManager";

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
        console.log("SignIn Successful...", data);
        if (data.data.statusCode === 200) {
          const { sessionId } = data.data;
          const { IdToken } = data.data.tokens;
          const expiry = moment
            .utc()
            .add("1", "hours")
            .format();
          setCookie("sessionId", sessionId);
          setCookie("idToken", IdToken);
          setCookie("expiry", expiry);
        }
        dispatch(loginSuccess());
        history.push("/landing");
      })
      .catch(error => {
        console.log("SignUp failed...", error);
        dispatch(loginFailure(error));
      });
  };
};

const loadingStart = () => {
  return {
    type: ACTIONS.LOADING_START
  };
};

export const logout = () => {
  return {
    type: ACTIONS.LOGOUT
  };
};

export const sessionValidityCheck = () => {
  return dispatch => {
    console.log("I am checking session");
    dispatch(loadingStart());
    const areTokensPresent = checkSessionValidity();
    console.log("Hllo", areTokensPresent);
    if (!areTokensPresent) {
      deleteAllCookies();
      dispatch(logout());
    } else {
      const config = {
        headers: { Authorization: getCookie("idToken") }
      };

      axios
        .get(
          `${apiEndpoints.sessionValidity}?sessionId=${getCookie("sessionId")}`,
          config
        )
        .then(data => {
          if (data.data && data.data.statusCode === 200) {
            dispatch(loginSuccess());
            history.push("/landing");
          } else {
            deleteAllCookies();
            dispatch(logout());
          }
        })
        .catch(error => {
          console.log("Error is", error);
          deleteAllCookies();
          dispatch(logout());
        });
    }
  };
};
