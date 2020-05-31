import moment from "moment";
import axios from "./axios";
import { apiEndpoints } from "./constants";
import { getCookie } from "./cookies";
export const checkSessionValidity = () => {
  const sessionId = getCookie("sessionId");
  const idToken = getCookie("idToken");
  //const expiry = getCookie("expiry");
  //const expiryValidation = checkExpiry(expiry);
  if (!sessionId || !idToken) return false;
  else return true;
};

// const checkExpiry = expiry => {
//   const newDate = moment.utc().format();
//   return moment(expiry).isAfter(newDate);
// };

//import { createSelector } from "reselect";

//createSelector will memoize the function and stop us from on re-render
//This is actually not a selector, as it it updating the Redux state
//Selectory precisely takes in the Redux state.
export const sessionState = async () => {
  const areTokensPresent = checkSessionValidity();
  if (!areTokensPresent) {
    return false;
  }
  try {
    const config = {
      headers: { Authorization: getCookie("idToken") }
    };
    await axios.get(
      `${apiEndpoints.sessionValidity}?sessionId=${getCookie("sessionId")}`,
      config
    );
    return true;
  } catch (error) {
    return false;
  }
};
