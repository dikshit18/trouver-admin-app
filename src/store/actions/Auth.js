import * as ACTIONS from "./actionTypes";
import axios from "../../utils/axios";
import { apiEndpoints } from "../../utils/constants";
import { setCookie } from "../../utils/cookies";
import moment from "moment";

export const loginSuccess = data => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    data
  };
};
export const loginFailure = error => {
  return {
    type: ACTIONS.LOGIN_FAILURE,
    error
  };
};

export const login = (username, password) => {
  return dispatch => {
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
        dispatch(loginSuccess(data));
      })
      .catch(error => {
        console.log("SignUp failed...", error);
        dispatch(loginFailure(error));
      });
  };
};
