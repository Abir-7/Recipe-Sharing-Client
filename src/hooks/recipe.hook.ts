/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createRecipe,
  deleteAdminrecipe,
  deleteMyrecipe,
  getAllRecipe,
  getSingleUserRecipe,
  ratingOperation,
  unpublishAdminrecipe,
} from "@/services/RecepeService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_RECIPE"],
    mutationFn: async (re) => await createRecipe(re),
    onSuccess: () => {
      toast.success("Recipe created successfuly.");
    },
    onError: (error) => {
      toast.error(error.message);
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
      toast.error(error.message);
    },
  });
};

export const useDeleteRecipe = () => {
  return useMutation<any, Error, { rId: string }>({
    mutationKey: ["DELETE_RECIPE"],
    mutationFn: async (data) => await deleteMyrecipe(data),
    onSuccess: () => {
      toast.success("Recipe Deleted");
    },
    onError: (error) => {
      toast.error(error.message);
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
      toast.error(error.message);
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
      toast.error(error.message);
    },
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
  category: string
) => {
  return useQuery({
    queryKey: ["All_RECIPE", search, sort, category],
    queryFn: async () => {
      return await getAllRecipe(search, sort, category);
    },
  });
};
