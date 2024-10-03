import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import ProfileUpdate from "@/components/common/userProfile/ProfileUpdate";
import UserProfile from "@/components/common/userProfile/UserProfile";
import envConfig from "@/config/envConfig";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const token = cookies().get("accessToken")?.value;
  const response = await fetch(`${envConfig?.baseApi}/user/me`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const { data } = await response.json();

  return (
    <div>
      <HeaderTitle text="User Profile"></HeaderTitle>
      <UserProfile userData={data}></UserProfile>
      <ProfileUpdate></ProfileUpdate>
    </div>
  );
};
export default page;
