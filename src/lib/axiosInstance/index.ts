import envConfig from "@/config/envConfig";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
