import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import envConfig from "@/config/envConfig";

import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const AdminDashboard = async () => {
  const token = cookies().get("accessToken")?.value;
  const response = await fetch(`${envConfig.baseApi}/admin/dashboard`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const { data } = await response.json();

  return (
    <div>
      <HeaderTitle text="Admin Dashboard"></HeaderTitle>
      <div className="grid grid-cols-3  text-yellow-400 text-xl font-bold gap-4 justify-items-center container mx-auto mt-10">
        <Link
          className="w-48 h-28 bg-gray-950 rounded-lg flex-col flex justify-center items-center gap-2"
          href={"/admin/manage-user"}
        >
          <span> Total Users</span>

          <span className="text-white text-4xl"> {data?.totalUser}</span>
        </Link>
        <Link
          className="w-48 h-28 bg-gray-950 rounded-lg flex-col flex justify-center items-center gap-2"
          href={"/admin/all-admin"}
        >
          <span> Total Admin</span>

          <span className="text-white  text-4xl"> {data?.totalAdmin}</span>
        </Link>
        <Link
          className="w-48 h-28 bg-gray-950 rounded-lg flex-col flex justify-center items-center gap-2"
          href={"/admin/manage-user-recipe"}
        >
          <span> Total Post</span>
          <span className="text-white  text-4xl"> {data?.totalPost}</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
