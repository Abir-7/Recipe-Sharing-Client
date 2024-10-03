/* eslint-disable @typescript-eslint/no-explicit-any */

import { AuthContext } from "@/context/auth.provider";

import { logOutUser } from "@/services/AuthService";
import { createPayment } from "@/services/PaymentService";
import { useMutation } from "@tanstack/react-query";

import { useContext } from "react";

import { toast } from "sonner";

export const useCreatePayment = () => {
  const userData = useContext(AuthContext);

  return useMutation<any, Error, { price: number }>({
    mutationKey: ["CREATE_PAYMENT"],
    mutationFn: async (price) => await createPayment(price),
    onSuccess: (res: any) => {
      console.log(res);
      toast.success("Redirecting to payment page...");
      const payLink = res?.data?.payLink;

      // If payLink exists, redirect the user to the payment page
      if (payLink) {
        window.location.href = payLink;
        logOutUser();
        userData?.setIsLoading(true);
      } else {
        toast.error("Failed to retrieve payment link.");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
