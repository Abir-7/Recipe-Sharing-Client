/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const userMessage = async (mData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/contact/message`, mData);
    return data;
  } catch (error: any) {
    if (error?.response?.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};
