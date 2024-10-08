"use server";

import envConfig from "@/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";
import { useResetUser } from "./resetUser";

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
    console.log(error, "ggggggggggg11231312");
    if (error.response && error.response.status === 401) {
      console.log(error, "ggggggggggg11231312");

      cookies().delete("accessToken");
      useResetUser();
    }
    return Promise.reject(error);
  }
);
