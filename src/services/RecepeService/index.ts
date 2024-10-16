"use server";
import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const createRecipe = async (rdata: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/recipe/add-recipe`, rdata);
    return data;
  } catch (error: any) {
    if (error?.response?.data?.message) {
      throw new Error(error?.response?.data?.message);
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
    if (error?.response?.data?.message) {
      throw new Error(error?.response?.data?.message);
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
    if (error?.response?.data?.message) {
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
    if (error?.response?.data?.message) {
      throw new Error(error?.response?.data.message);
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
    if (error?.response?.data?.message) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error(error);
    }
  }
};
export const updateRecipe = async (rData: {
  rId: string;
  data: FieldValues;
}) => {
  try {
    const { data } = await axiosInstance.patch(
      `/recipe/recipe/${rData.rId}`,
      rData.data
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

export const getRecipeDetails = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/recipe/${id}`);
    return data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const getSingleUserRecipe = async (
  search = "",
  sort = "",
  category = "",
  currentPage = 1,
  pageSize = 1
) => {
  try {
    console.log(sort, search, category, "ggggg");
    const { data } = await axiosInstance.get(`/recipe/my-recipe`, {
      params: {
        search,
        sort,
        category,
        currentPage,
        pageSize,
      },
    });

    revalidateTag("recipe");
    return data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error.message || error);
    }
  }
};
export const getAllRecipe = async (
  search: string,
  sort: string,
  category: string,
  page: number,
  limit: number
) => {
  try {
    const { data } = await axiosInstance.get(`/recipe`, {
      params: {
        search,
        sort,
        category,
        page,
        limit,
      },
    });
    revalidateTag("recipe");
    return data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error.message || error);
    }
  }
};
