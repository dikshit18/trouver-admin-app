import moment from "moment";
import { getCookie } from "./cookies";
export default () => {
  const sessionId = getCookie("sessionId");
  const idToken = getCookie("idToken");
  const expiry = getCookie("expiry");
  const expiryValidation = checkExpiry(expiry);
  if (!sessionId || !idToken || !expiryValidation) return false;
  else return true;
};

const checkExpiry = expiry => {
  const newDate = moment.utc().format();
  return moment(expiry).isAfter(newDate);
};
