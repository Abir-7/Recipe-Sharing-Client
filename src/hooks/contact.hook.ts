/* eslint-disable @typescript-eslint/no-explicit-any */
import { userMessage } from "@/services/ContactService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserMessage = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_Message"],
    mutationFn: async (mData) => await userMessage(mData),
    onSuccess: () => {
      toast.success("Message sent");
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });
};
