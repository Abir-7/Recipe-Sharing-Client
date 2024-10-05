/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

export const userFollow = async (userID: { userID: string }) => {
  try {
    const { data } = await axiosInstance.patch("/customer/follow-user", userID);
    revalidateTag("recepe_details");
    return data;
  } catch (error: any) {
    if (error?.response?.data.message) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error);
    }
  }
};

export const userUnfollow = async (userID: { userID: string }) => {
  try {
    const { data } = await axiosInstance.patch(
      "/customer/unfollow-user",
      userID
    );
    revalidateTag("recepe_details");
    return data;
  } catch (error: any) {
    if (error?.response?.data.message) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error(error);
    }
  }
};
