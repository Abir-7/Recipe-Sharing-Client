"use server";
import { LogOut } from "@/components/common/logoutButton/LogOut";
import envConfig from "@/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();

    const accessToken = cookieStore.get("accessToken")?.value;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

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
    const config = error.config;
    if (error.response && error.response.status === 401 && !config?.sent) {
      // Dispatch the logout action
      LogOut();
    }

    return Promise.reject(error);
  }
);
