"use client";

import React, { useEffect } from "react";
import CForm from "../Form/CForm";
import { FieldValues } from "react-hook-form";
import CInput from "../Form/CInput";
import CImageInput from "../Form/CImageInput";
import CTextArea from "../Form/CTextArea";
import CButton from "../Form/CButton";
import { useUserInfoUpdate } from "@/hooks/auth.hook";
import { uploadImageToCloudinary } from "@/utils/uplaodImage";

import ChangePassModal from "./ChangePassModal";
import Modal from "../modal/Modal";
import { useCreatePayment } from "@/hooks/payment.hook";
import { toast } from "sonner";

const ProfileUpdate = () => {
  const { mutate: updateProfile, error, isPending } = useUserInfoUpdate();
  const {
    mutate: createPayment,
    isPending: isPaymentPending,
    error: error2,
  } = useCreatePayment();
  const onFormSubmit = async (data: FieldValues) => {
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
    } else {
      delete filteredData.photo;
      updateProfile({ ...filteredData });
    }
  };

  const handleSubcribe = (price: number) => {
    createPayment({ price });
  };
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  useEffect(() => {
    if (error2) {
      toast.error(error2.message);
    }
  }, [error2]);
  return (
    <div className="p-6">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg "></div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-6 ">Update Profile</h1>
        <div className="flex items-center gap-2">
          <Modal
            title="2 Month Subcription"
            btnType={"default"}
            btnText="Buy Subcription"
            description="You will get access to premium recipe."
            btnCss="bg-green-500 rounded-full hover:bg-yellow-400  hover:text-gray-950"
          >
            <div
              onClick={() => !isPaymentPending && handleSubcribe(400)}
              className="w-2/3 active:scale-90 hover:scale-110 duration-150 py-4 rounded-md mx-auto text-center bg-gray-950 grid"
            >
              <span className="text-yellow-400 font-bold">400 tk</span>
              <span className="text-green-500 text-2xl font-bold">
                {isPaymentPending ? "Loading..." : "Subcribe Now"}
              </span>
            </div>
          </Modal>

          <ChangePassModal></ChangePassModal>
        </div>
      </div>
      <div className="w-full   ">
        <CForm onFormSubmit={onFormSubmit}>
          <div className="grid gap-4">
            <CInput label="Name" name="userName"></CInput>
            <CInput label="Address" name="address"></CInput>
            <CInput label="Mobile" name="phone"></CInput>
            <CTextArea label="Bio" name="bio"></CTextArea>
            <CImageInput></CImageInput>

            <CButton isPending={isPending} text="Update Data"></CButton>
          </div>
        </CForm>
      </div>
    </div>
  );
};

export default ProfileUpdate;
