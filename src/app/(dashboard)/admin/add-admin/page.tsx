"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CImageInput from "@/components/common/Form/CImageInput";
import CInput from "@/components/common/Form/CInput";
import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import { useCreateAdmin } from "@/hooks/auth.hook";

import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddAdmin = () => {
  const { mutate: createAdmin } = useCreateAdmin();
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
    const { userName, email, password, photo, address, phone } = data;

    if (photo) {
      const uploadedImageUrl = await uploadImageToCloudinary(photo);

      if (!uploadedImageUrl) {
        toast.error("Something went wrong. Try again.");
      } else {
        const adminData = {
          password: password,
          admin: { userName, email, address, phone, photo: uploadedImageUrl },
        };
        console.log(adminData, "ffff");
        createAdmin(adminData);
      }
    }
  };
  return (
    <div>
      <HeaderTitle text="Add Admin"></HeaderTitle>
      <div className="p-2 mx-auto mt-10 container">
        <CForm onFormSubmit={onFormSubmit}>
          <div className="grid gap-2">
            <CInput required={true} name="userName" label="Name"></CInput>
            <CInput required={true} name="email" label="Email"></CInput>
            <CInput required={true} name="password" label="Password"></CInput>
            <CInput required={true} name="phone" label="Mobile"></CInput>
            <CInput required={true} name="address" label="Address"></CInput>
            <CImageInput required={true}></CImageInput>
            <CButton text="Create Admin"></CButton>
          </div>
        </CForm>
      </div>
    </div>
  );
};

export default AddAdmin;
