/* eslint-disable @typescript-eslint/no-explicit-any */

import { createRecipe, getMyRecipe } from "@/services/RecepeService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateRecipe = () => {
  return useMutation<any, Error, { recipe: string }>({
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

export const useGetMyRecipe = () => {
  return useQuery({
    queryKey: ["CREATE_RECIPE"],
    queryFn: async () => await getMyRecipe(),
  });
};
