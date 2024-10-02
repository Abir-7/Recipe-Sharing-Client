"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CImageInput from "@/components/common/Form/CImageInput";
import CInput from "@/components/common/Form/CInput";
import Modal from "@/components/common/modal/Modal";
import { Button } from "@/components/ui/button";

import { DialogClose } from "@/components/ui/dialog";
import {
  useBlockUser,
  useDeleteUser,
  useUpdateAdmin,
} from "@/hooks/admin.hook";
import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AdminTableAction = ({ userId }: { userId: string }) => {
  const { mutate: updateAdmin } = useUpdateAdmin();
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: blockUser } = useBlockUser();

  const handleBlockUser = (id: string) => {
    blockUser(id);
  };
  const handleDeleteUser = (id: string) => {
    deleteUser(id);
  };

  const [isPending, setIsPending] = useState(false);
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
    setIsPending(true);
    const filteredData = {} as FieldValues;

    for (const key in data) {
      if (data[key] !== null && data[key] !== undefined && data[key] !== "") {
        filteredData[key] = data[key];
      }
    }

    if (Object.keys(filteredData).length > 0) {
      if (!!filteredData.photo) {
        const photoUrl = await uploadImageToCloudinary(filteredData.photo);
        if (photoUrl) {
          updateAdmin({
            userId,
            userData: { ...filteredData, photo: photoUrl },
          });
        }
        setIsPending(false);
      } else {
        delete filteredData.photo;
        updateAdmin({ userId, userData: { ...filteredData } });

        setIsPending(false);
      }
    } else {
      setIsPending(false);
      toast.error("Add some info to update.");
    }
  };

  return (
    <div>
      <Modal
        btnCss="text-red-500 hover:scale-110 active:scale-90 duration-500 "
        description=""
        title="Are you sure you want to block?"
        btnType={null}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        }
      >
        <DialogClose
          onClick={() => handleBlockUser(userId)}
          className="bg-gray-950 text-yellow-400 py-2 rounded-md"
        >
          Yes
        </DialogClose>
      </Modal>
      <Modal
        btnCss="text-red-500 hover:scale-110 active:scale-90 duration-500 "
        description=""
        title="Are you sure you want to Delete?"
        btnType={null}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        }
      >
        {" "}
        <DialogClose
          onClick={() => handleDeleteUser(userId)}
          className="bg-gray-950 text-yellow-400 py-2 rounded-md"
        >
          Yes
        </DialogClose>
      </Modal>

      <Modal
        btnCss="text-green-500 hover:scale-110 active:scale-90 duration-500 "
        description=""
        title="Update Admin Info"
        btnType={null}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
        }
      >
        <CForm onFormSubmit={onFormSubmit}>
          <div className="grid gap-2">
            <CInput name="userName" label="Name"></CInput>

            <CInput name="password" label="Password"></CInput>
            <CInput name="phone" label="Mobile"></CInput>
            <CInput name="address" label="Address"></CInput>
            <CImageInput></CImageInput>
            {isPending ? (
              <Button disabled={true}>Updating....</Button>
            ) : (
              <CButton text="Update Data"></CButton>
            )}
          </div>
        </CForm>
      </Modal>
    </div>
  );
};

export default AdminTableAction;
