/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/lib/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { ICustomerProfile } from "@/interface/userProfile.interface";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/user/signup", userData);
    return data;
  } catch (error: any) {
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
    const { data } = await axiosInstance.post("/auth/reset", userEmail);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const setNewPass = async (passData: {
  token: string;
  password: string;
}) => {
  try {
    const { data } = await axiosInstance.patch("/user/set-pass", passData);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const changePassword = async (passData: {
  oldPass: string;
  newPass: string;
}) => {
  try {
    const { data } = await axiosInstance.patch("/user/update-pass", passData);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const changeUserInfo = async (userData: Partial<ICustomerProfile>) => {
  try {
    const { data } = await axiosInstance.patch("/user/upate-profile", userData);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};
