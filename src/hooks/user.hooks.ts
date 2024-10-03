/* eslint-disable @typescript-eslint/no-explicit-any */
import { changePassword } from "@/services/AuthService";
import { userFollow, userUnfollow } from "@/services/UserService";
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
export const useFollowUser = () => {
  return useMutation<any, Error, { userID: string }>({
    mutationKey: ["FOLLOW_USER"],
    mutationFn: async (id) => await userFollow(id),
    onSuccess: () => {
      toast.success("you started following this user.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUnfollowUser = () => {
  return useMutation<any, Error, { userID: string }>({
    mutationKey: ["UNFOLLOW_USER"],
    mutationFn: async (id) => await userUnfollow(id),
    onSuccess: () => {
      toast.success("you unfollow a user.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
