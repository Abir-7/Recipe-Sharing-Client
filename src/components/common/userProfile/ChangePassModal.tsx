import React, { useEffect } from "react";
import Modal from "../modal/Modal";
import CForm from "../Form/CForm";
import { FieldValues } from "react-hook-form";
import CInput from "../Form/CInput";
import { toast } from "sonner";
import { useUpdatePass } from "@/hooks/auth.hook";
import CButton from "../Form/CButton";

const ChangePassModal = () => {
  const { mutate: updateUserPass, error, isPending } = useUpdatePass();
  const onFormSubmit = async (data: FieldValues) => {
    if (data.password !== data.cPassword) {
      toast.error("Password not matched.");
    } else {
      updateUserPass({ oldPass: data.oldPass, newPass: data.password });
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
  return (
    <Modal
      title="Update Password"
      description=""
      btnType="default"
      btnText="Change Password"
    >
      <CForm onFormSubmit={onFormSubmit}>
        <div className="grid gap-4">
          <CInput label="Old Password" name="oldPass" type="password"></CInput>
          <CInput label="New Password" name="password" type="password"></CInput>
          <CInput
            label="Confirm Password"
            name="cPassword"
            type="password"
          ></CInput>
          <CButton isPending={isPending} text="Update Password"></CButton>
        </div>
      </CForm>
    </Modal>
  );
};

export default ChangePassModal;
