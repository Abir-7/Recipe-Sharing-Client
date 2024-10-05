/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const blockUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.patch(`/user/block-user/${id}`);
    return data;
  } catch (error: any) {
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.patch(`/user/delete-user/${id}`);
    return data;
  } catch (error: any) {
    if (error?.response?.data.message) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error(error);
    }
  }
};

export const updateAdmin = async ({
  userData,
  userId,
}: {
  userData: FieldValues;
  userId: string;
}) => {
  try {
    const { data } = await axiosInstance.patch(
      `/admin/update-admin/${userId}`,
      userData
    );
    revalidateTag("admin");
    return data;
  } catch (error: any) {
    if (error?.response?.data.message) {
      throw new Error(error?.response?.data.message);
    } else {
      throw new Error(error);
    }
  }
};

// export const dashboardAdmin = async () => {
//   try {
//     const { data } = await axiosInstance.get(`/admin/dashboard`);
//     return data;
//   } catch (error: any) {
//     if (error.response.data.message) {
//       throw new Error(error.response.data.message);
//     } else {
//       throw new Error(error);
//     }
//   }
// };
