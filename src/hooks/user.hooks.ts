/* eslint-disable @typescript-eslint/no-explicit-any */
import { changePassword } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdatePass = () => {
  return useMutation<any, Error, { oldPass: string; newPass: string }>({
    mutationKey: ["UPDATE_PASS"],
    mutationFn: async (pass) => await changePassword(pass),
    onSuccess: () => {
      toast.success("Password changed successfuly.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
