import axios from "../../utils/axios";
import { apiEndpoints } from "../../utils/constants";
import { getCookie } from "../../utils/cookies";
import checkSessionValidity from "../../utils/sessionManager";
import { createSelector } from "reselect";

//createSelector will memoize the function and stop us from on re-render
export const sessionState = createSelector(async () => {
  const areTokensPresent = checkSessionValidity();
  console.log("I am checking tokens...", areTokensPresent);
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
});
