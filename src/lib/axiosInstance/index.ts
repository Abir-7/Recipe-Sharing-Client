"use server";
import envConfig from "@/config/envConfig";
import { logOutUser2 } from "@/services/AuthService";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = cookies().get("accessToken")?.value;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      await logOutUser2();
      console.log("first");
      redirect("/", RedirectType.push);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
