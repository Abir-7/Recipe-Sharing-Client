"use server";
import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createRecipe = async (rdata: { recipe: string }) => {
  try {
    const { data } = await axiosInstance.post(`/recipe/add-recipe`, rdata);
    return data;
  } catch (error: any) {
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
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const ratingOperation = async (ratingData: Record<string, unknown>) => {
  try {
    const { data } = await axiosInstance.post(`/rating/add-rating`, ratingData);
    revalidateTag("recepe");

    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const deleteMyrecipe = async (rid: { rId: string }) => {
  try {
    const { data } = await axiosInstance.patch(
      `/recipe/my-recipe-delete/${rid.rId}`
    );
    revalidateTag("recepe");
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const deleteAdminrecipe = async (rid: { rId: string }) => {
  try {
    const { data } = await axiosInstance.patch(
      `/recipe/admin-recipe-delete/${rid.rId}`
    );
    revalidateTag("recepe");
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const unpublishAdminrecipe = async (rid: { rId: string }) => {
  try {
    const { data } = await axiosInstance.patch(
      `/recipe/admin-recipe-publish/${rid.rId}`
    );
    revalidateTag("recepe");
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};
