"use server";
import axiosInstance from "@/lib/axiosInstance";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createRecipe = async (rdata: { recipe: string }) => {
  try {
    const { data } = await axiosInstance.post(`/recipe/add-recipe`, rdata);
    return data;
  } catch (error: any) {
    console.log(error.response.data.errorMessages, "ggrecipe2");
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const getMyRecipe = async () => {
  try {
    const { data } = await axiosInstance.get(`/recipe/my-recipe`);
    return data;
  } catch (error: any) {
    console.log(error.response.data.errorMessages, "ggrecipe2");
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};
