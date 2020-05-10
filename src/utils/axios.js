import axios from "axios";
import { apiEndpoints } from "./constants";
const timeout = 10000;

export default (() => {
  return axios.create({
    baseURL: apiEndpoints.baseUrl,
    timeout,
    headers: { "Content-Type": "application/json" }
  });
})();
