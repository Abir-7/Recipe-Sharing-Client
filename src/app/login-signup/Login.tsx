"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CInput from "@/components/common/Form/CInput";
import { AuthContext } from "@/context/auth.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const searchParams = useSearchParams();
  const authData = useContext(AuthContext);
  const router = useRouter();
  const redirects = searchParams.get("redirects");
  const {
    mutate: userLogin,
    isPending,
    isSuccess,
    error: loginError,
  } = useUserLogin();

  const onFormSubmit = async (data: FieldValues) => {
    userLogin(data);
    authData?.setIsLoading(true);
  };

  useEffect(() => {
    if (loginError?.message) {
      toast.error(loginError?.message);
    }
  }, [loginError]);

  if (!isPending && isSuccess) {
    if (redirects) {
      router.push(redirects as string);
    } else {
      router.push("/");
    }
  }
  return (
    <CForm onFormSubmit={onFormSubmit}>
      <div className="grid gap-3">
        <CInput required={true} name="email" label="Email"></CInput>
        <CInput
          required={true}
          type="password"
          name="password"
          label="Password"
        ></CInput>
        <CButton
          isPending={isPending}
          cssClass=""
          text={isPending ? "Loading...." : "Login"}
        ></CButton>
      </div>
    </CForm>
  );
};

export default Login;
