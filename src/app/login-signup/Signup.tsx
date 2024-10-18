"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CImageInput from "@/components/common/Form/CImageInput";
import CInput from "@/components/common/Form/CInput";
import { useUserRegistration } from "@/hooks/auth.hook";
import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Signup = ({
  setActiveTab,
}: {
  setActiveTab: (string: string) => void;
}) => {
  const [isPending, setIsPending] = useState(false);
  const {
    mutate: userReg,

    error: regError,
  } = useUserRegistration();

  const onFormSubmit = async (userdata: FieldValues) => {
    setIsPending(true);
    const { userName, email, password, photo } = userdata;
    if (photo) {
      const uploadedImageUrl = await uploadImageToCloudinary(photo);
      if (!uploadedImageUrl) {
        toast.error("Something went wrong. Try again.");
      } else {
        userReg(
          {
            password: password,
            customer: { userName, email, photo: uploadedImageUrl },
          },
          {
            onSuccess: () => {
              setIsPending(false);
              setActiveTab("signin");
            },
          }
        );
      }
    }
  };

  useEffect(() => {
    if (regError?.message) {
      toast.error(regError?.message);
    }
  }, [regError]);
  return (
    <CForm onFormSubmit={onFormSubmit}>
      <div className="grid gap-3">
        <CInput required={true} name="userName" label="Name"></CInput>
        <CInput required={true} name="email" label="Email"></CInput>
        <CInput
          required={true}
          type="password"
          name="password"
          label="Password"
        ></CInput>
        <CImageInput required={true}></CImageInput>
        <CButton
          isPending={isPending}
          cssClass=""
          text={isPending ? "Loading...." : "Signup"}
        ></CButton>
      </div>
    </CForm>
  );
};

export default Signup;
