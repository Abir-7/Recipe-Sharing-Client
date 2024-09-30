/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  changePass,
  loginUser,
  registerUser,
  resetPass,
} from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REG"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REG"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useResetPass = () => {
  return useMutation<any, Error, { email: string }>({
    mutationKey: ["RESET_PASS"],
    mutationFn: async (userEmail) => await resetPass(userEmail),
    onSuccess: () => {
      toast.success("Reset link sent to your email successfuly.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useChangePass = () => {
  return useMutation<any, Error, { token: string; password: string }>({
    mutationKey: ["RESET_PASS"],
    mutationFn: async (userEmail) => await changePass(userEmail),
    onSuccess: () => {
      toast.success("Password reset successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
