/* eslint-disable @typescript-eslint/no-explicit-any */

import { queryClient } from "@/lib/Provider";
import {
  createRecipe,
  deleteAdminrecipe,
  deleteMyrecipe,
  getAllRecipe,
  getRecipeDetails,
  getSingleUserRecipe,
  ratingOperation,
  unpublishAdminrecipe,
  updateRecipe,
} from "@/services/RecepeService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_RECIPE"],
    mutationFn: async (re) => await createRecipe(re),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["USER_RECIPE"] });
      toast.success("Recipe created successfuly.");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};

export const useRatingOperation = () => {
  return useMutation<any, Error, Record<string, unknown>>({
    mutationKey: ["ADD_RATING"],
    mutationFn: async (data) => await ratingOperation(data),
    onSuccess: () => {
      toast.success("Feedback added");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};

export const useDeleteRecipe = () => {
  return useMutation<any, Error, { rId: string }>({
    mutationKey: ["DELETE_RECIPE"],
    mutationFn: async (data) => await deleteMyrecipe(data),
    onSuccess: () => {
      toast.success("Recipe Deleted");
      queryClient.invalidateQueries({ queryKey: ["USER_RECIPE"] });
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};

export const useAdminDeleteRecipe = () => {
  return useMutation<any, Error, { rId: string }>({
    mutationKey: ["ADMIN_DELETE_RECIPE"],
    mutationFn: async (data) => await deleteAdminrecipe(data),
    onSuccess: () => {
      toast.success("Recipe Deleted");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};

export const useAdminUnpublishRecipe = () => {
  return useMutation<any, Error, { rId: string }>({
    mutationKey: ["UNPUBLISH_RECIPE"],
    mutationFn: async (data) => await unpublishAdminrecipe(data),
    onSuccess: () => {
      toast.success("Publish status changed.");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};
export const useUpdateRecipe = () => {
  return useMutation<any, Error, { rId: string; data: FieldValues }>({
    mutationKey: ["UPDATE_RECIPE"],
    mutationFn: async (data) => await updateRecipe(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["USER_RECIPE"] });
      toast.success("Recipe Updated changed.");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};
export const useGetRecipeDetails = (id: string) => {
  return useQuery({
    queryKey: ["GEt_RECIPE_DETAILS", id], // Include the id in the
    queryFn: () => getRecipeDetails(id), // Pass the id to the query function
    enabled: !!id, // Only run the query if id exists
  });
};

export const useSingleUserRecipe = (
  search: string,
  sort: string,
  category: string,
  currentPage: number,
  pageSize: number
) => {
  return useQuery({
    queryKey: ["USER_RECIPE", search, sort, category, currentPage, pageSize],
    queryFn: async () => {
      return await getSingleUserRecipe(
        search,
        sort,
        category,
        currentPage,
        pageSize
      );
    },
  });
};
export const useGetAllRecipe = (
  search: string,
  sort: string,
  category: string,
  page: number,
  limit: number
) => {
  return useQuery({
    queryKey: ["All_RECIPE", search, sort, category, page, limit],
    queryFn: async () => {
      return await getAllRecipe(search, sort, category, page, limit);
    },
  });
};
