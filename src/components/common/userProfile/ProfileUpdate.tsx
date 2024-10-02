"use client";

import React, { useState } from "react";
import CForm from "../Form/CForm";
import { FieldValues } from "react-hook-form";
import CInput from "../Form/CInput";
import CImageInput from "../Form/CImageInput";
import CTextArea from "../Form/CTextArea";
import CButton from "../Form/CButton";
import { useUserInfoUpdate } from "@/hooks/auth.hook";
import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import { Button } from "@/components/ui/button";
import ChangePassModal from "./ChangePassModal";

const ProfileUpdate = () => {
  const [isPending, setIsPending] = useState(false);
  const { mutate: updateProfile } = useUserInfoUpdate();
  const onFormSubmit = async (data: FieldValues) => {
    setIsPending(true);
    const filteredData = {} as FieldValues;

    for (const key in data) {
      if (data[key] !== null && data[key] !== undefined && data[key] !== "") {
        filteredData[key] = data[key];
      }
    }

    if (!!filteredData.photo) {
      const photoUrl = await uploadImageToCloudinary(filteredData.photo);
      if (photoUrl) {
        updateProfile({ ...filteredData, photo: photoUrl });
      }
      setIsPending(false);
    } else {
      delete filteredData.photo;
      updateProfile({ ...filteredData });

      setIsPending(false);
    }
  };
  return (
    <div className="p-6">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg "></div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-6 ">Update Profile</h1>
        <ChangePassModal></ChangePassModal>
      </div>
      <div className="w-full   ">
        <CForm onFormSubmit={onFormSubmit}>
          <div className="grid gap-4">
            <CInput label="Name" name="userName"></CInput>
            <CInput label="Address" name="address"></CInput>
            <CInput label="Mobile" name="phone"></CInput>
            <CTextArea label="Bio" name="bio"></CTextArea>
            <CImageInput></CImageInput>
            {isPending ? (
              <Button disabled={true}>Updating....</Button>
            ) : (
              <CButton text="Update Data"></CButton>
            )}
          </div>
        </CForm>
      </div>
    </div>
  );
};

export default ProfileUpdate;
