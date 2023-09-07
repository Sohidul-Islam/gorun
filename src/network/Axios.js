import moment from "moment";

import axios from "axios";
import { API_URL } from "./api";
import { getCookiesAsObject } from "../helpers/cookies/getCookiesAsObject";

const AXIOS = axios.create({
  baseURL: API_URL,
});
/**
 * Interceptor for all requests
 */
AXIOS.interceptors.request.use(
  async (config) => {
    /**
     * headers
     */
    config.headers["Content-Type"] = "application/json";

    if (document.cookie.length > 0) {
      const accessToken = getCookiesAsObject()?.access_token || null;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    /**
     * params
     */
    if (config?.params) {
      if (config?.params?.endDate)
        config.params.endDate = moment(config.params.endDate).format(
          "YYYY-MM-DD"
        );
      if (config?.params?.startDate)
        config.params.startDate = moment(config.params.startDate).format(
          "YYYY-MM-DD"
        );
    }

    return config;
  },
  (error) => {
    /**
     * Add your error handlers here
     */
    console.log("api error:", error);
    return Promise.reject(error);
  }
);
/**
 * Interceptor for all responces
 */
AXIOS.interceptors.response.use(
  (response) =>
    /**
     * Add logic for successful response
     */
    response?.data || {},
  (error) => {
    /**
     * Add logic for any error from backend
     */
    console.log("api error:", error);
    return Promise.reject(error);
  }
);

export default AXIOS;
