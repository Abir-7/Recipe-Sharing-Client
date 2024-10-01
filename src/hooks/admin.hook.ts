/* eslint-disable @typescript-eslint/no-explicit-any */

import { blockUser, deleteUser } from "@/services/AdminService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useBlockUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["BLOCK_USER"],
    mutationFn: async (id) => await blockUser(id),
    onSuccess: () => {
      toast.success("User is blocked successfuly");
    },
    onError: (error) => {
      toast.error(error.message);
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
      toast.error(error.message);
    },
  });
};
