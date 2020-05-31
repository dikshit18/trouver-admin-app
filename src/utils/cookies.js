import Cookies from "js-cookie";
export const setCookie = (key, value) => {
  Cookies.set(key, value);
  //{ secure: true } To be added for HTTPS
  return;
};

export const getCookie = key => {
  return Cookies.get(key);
};

export const deleteCookie = key => {
  return Cookies.remove(key);
};

export const deleteAllCookies = () => {
  deleteCookie("idToken");
  deleteCookie("sessionId");
  //deleteCookie("expiry");
};
