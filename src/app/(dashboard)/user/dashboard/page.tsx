import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import UserProfile from "@/components/common/userProfile/UserProfile";
import envConfig from "@/config/envConfig";

import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const UserDashboard = async () => {
  const token = cookies().get("accessToken")?.value;

  const responsee = await fetch(`${envConfig.baseApi}/customer/dashboard`, {
    headers: {
      Authorization: `${token}`,
    },
    next: { tags: ["dashboar-data"] },
  });

  const response = await fetch(`${envConfig?.baseApi}/user/me`, {
    headers: {
      Authorization: `${token}`,
    },
    next: { tags: ["dashboar-data"] },
  });

  const { data } = await response.json();

  const data2 = await responsee.json();

  return (
    <div>
      <HeaderTitle text="User Dashboard"></HeaderTitle>

      <UserProfile dashboardData={data2?.data} userData={data}></UserProfile>
      <div className="px-2 flex justify-center">
        <div className="bg-gray-950 mt-5 w-56 text-2xl flex-col flex duration-200 cursor-pointer hover:bg-gray-900 justify-center items-center py-4 px-8 rounded-full ">
          <Link href="/user/my-recipe" className="text-yellow-400">
            {" "}
            My Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
