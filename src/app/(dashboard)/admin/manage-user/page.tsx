import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import envConfig from "@/config/envConfig";
import { cookies } from "next/headers";
import React from "react";
import UserTable from "./UserTable";

const ManageUsers = async () => {
  const token = cookies().get("accessToken")?.value;
  const response = await fetch(`${envConfig.baseApi}/customer/all-customer`, {
    headers: {
      Authorization: `${token}`,
    },
    next: { tags: ["all-user"] },
  });
  const { data } = await response.json();

  return (
    <div className="max-w-full">
      <HeaderTitle text="Manage User"></HeaderTitle>

      <UserTable users={data}></UserTable>
    </div>
  );
};

export default ManageUsers;
