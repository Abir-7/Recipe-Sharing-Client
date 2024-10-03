/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";

export const createPayment = async (price: { price: number }) => {
  try {
    const { data } = await axiosInstance.post("/payment/create-payment", price);
    return data;
  } catch (error: any) {
    if (error?.response?.data.message) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error(error);
    }
  }
};
