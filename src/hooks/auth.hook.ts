/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserProfile } from "@/interface/userProfile.interface";
import {
  changePassword,
  changeUserInfo,
  loginUser,
  registerUser,
  resetPass,
  setNewPass,
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
export const useSetNewPass = () => {
  return useMutation<any, Error, { token: string; password: string }>({
    mutationKey: ["RESET_PASS"],
    mutationFn: async (data) => await setNewPass(data),
    onSuccess: () => {
      toast.success("Password reset successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

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

export const useUserInfoUpdate = () => {
  return useMutation<any, Error, Partial<IUserProfile>>({
    mutationKey: ["UPDATE_USER"],
    mutationFn: async (data) => await changeUserInfo(data),
    onSuccess: () => {
      toast.success("User updated successfuly.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
