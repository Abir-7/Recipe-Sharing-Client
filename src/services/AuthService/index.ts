/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/lib/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/user/signup", userData);
    return data;
  } catch (error: any) {
    console.log(error.response.data.errorMessages);
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.token?.accessToken);
    }
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const getCurrentUser = async () => {
  const token = cookies().get("accessToken")?.value;

  let decode = null;

  if (token) {
    decode = await jwtDecode(token as string);
  }

  return await decode;
};
export const logOutUser = async () => {
  cookies().delete("accessToken");
};

export const resetPass = async (userEmail: { email: string }) => {
  try {
    console.log(userEmail);
    const { data } = await axiosInstance.post("/auth/reset", userEmail);
    return data;
  } catch (error: any) {
    console.log(error.response.data.errorMessages, "gg");
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const changePass = async (passData: {
  token: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.post("/user/update-pass", passData);
    return data;
  } catch (error: any) {
    console.log(error.response.data.errorMessages, "gg");
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};
