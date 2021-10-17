import axios from "axios";
const queryString = require("query-string");
const axiosClient = axios.create({
  baseURL: "https://5b5fdbd6bde36b001408115a.mockapi.io/api/",
  headers: { "content-type": "application/json" },
  paramsSerializer: (param) => {
    return queryString.stringify(param);
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
