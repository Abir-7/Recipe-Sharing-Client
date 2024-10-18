/* eslint-disable @typescript-eslint/no-explicit-any */

import { blockUser, deleteUser, updateAdmin } from "@/services/AdminService";
import { useMutation } from "@tanstack/react-query";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useBlockUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["BLOCK_USER"],
    mutationFn: async (id) => await blockUser(id),
    onSuccess: (res: any) => {
      toast.success(res?.message);
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};

export const useDeleteUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_USER"],
    mutationFn: async (id) => await deleteUser(id),
    onSuccess: () => {
      toast.success("User is deleted successfuly");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};

export const useUpdateAdmin = () => {
  return useMutation<any, Error, { userData: FieldValues; userId: string }>({
    mutationKey: ["UPDATE_ADMIN"],
    mutationFn: async (data) => await updateAdmin(data),
    onSuccess: () => {
      toast.success("Admin is updated successfuly");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};
