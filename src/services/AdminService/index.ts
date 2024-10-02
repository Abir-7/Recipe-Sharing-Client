/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";

export const blockUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.patch(`/user/block-user/${id}`);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.patch(`/user/delete-user/${id}`);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};
