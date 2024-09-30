"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CInput from "@/components/common/Form/CInput";
import { useChangePass } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query params
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  console.log(token);
  const { mutate: changePassword } = useChangePass();

  if (!token && !email) {
    router.push("/");
  }

  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
    if (data.password !== data.cPassword) {
      toast.error("Password not matched.");
    } else {
      changePassword({ token: token as string, password: data.password });
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="h-10 bg-black font-semibold text-white text-2xl  flex items-center justify-center mb-10">
          <p>Reset Password</p>
        </div>
        <div className="flex justify-center ">
          <div className="w-96">
            <CForm onFormSubmit={onFormSubmit}>
              <div className="grid gap-4">
                <CInput
                  required={true}
                  label="Password"
                  type="password"
                  name="password"
                ></CInput>
                <CInput
                  required={true}
                  type="password"
                  label="Confirm Password"
                  name="cPassword"
                ></CInput>
                <CButton text="Change Password"></CButton>
              </div>
            </CForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
