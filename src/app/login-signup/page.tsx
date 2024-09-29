"use client";
import CButton from "@/components/common/Form/CButton";
import CForm from "@/components/common/Form/CForm";
import CImageInput from "@/components/common/Form/CImageInput";

import CInput from "@/components/common/Form/CInput";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserLogin, useUserRegistration } from "@/hooks/auth.hook";
import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Login_Signup = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirects = searchParams.get("redirects");
  const { mutate: userReg } = useUserRegistration();
  const { mutate: userLogin, isPending, isSuccess } = useUserLogin();
  const [activeTab, setActiveTab] = useState<string>("signin");
  const onFormSubmit = async (userdata: FieldValues) => {
    const { userName, email, password, photo } = userdata;

    if (activeTab === "signin") {
      userLogin(userdata);
      if (!isPending && isSuccess && redirects) {
        router.push(redirects);
      } else {
        router.push("/");
      }
    } else {
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
                setActiveTab("signin");
              },
            }
          );
        }
      }
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs
        value={activeTab}
        defaultValue="signin"
        className="w-[400px]"
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin"> Sign in</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 ">
              <CForm onFormSubmit={onFormSubmit}>
                <div className="grid gap-3">
                  <CInput name="email" label="Email"></CInput>
                  <CInput
                    type="password"
                    name="password"
                    label="Password"
                  ></CInput>

                  <CButton cssClass="" text="Login"></CButton>
                </div>
              </CForm>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Signup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CForm onFormSubmit={onFormSubmit}>
                <div className="grid gap-3">
                  <CInput name="userName" label="Name"></CInput>
                  <CInput name="email" label="Email"></CInput>
                  <CInput
                    type="password"
                    name="password"
                    label="Password"
                  ></CInput>
                  <CImageInput></CImageInput>
                  <CButton cssClass="" text="Login"></CButton>
                </div>
              </CForm>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login_Signup;
