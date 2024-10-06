import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import envConfig from "@/config/envConfig";
import { IAdminProfile } from "@/interface/userProfile.interface";
import { cookies } from "next/headers";
import React from "react";
import AdminTableAction from "./AdminTableAction";

const page = async () => {
  const token = cookies().get("accessToken")?.value;
  const response = await fetch(`${envConfig.baseApi}/admin/all-admin`, {
    headers: {
      Authorization: `${token}`,
    },
    next: { tags: ["admin"] },
  });
  const { data }: { data: IAdminProfile[] } = await response.json();

  return (
    <div className="w-full">
      <HeaderTitle text="All Admin"></HeaderTitle>
      <div className="overflow-x-auto">
        <div className="w-96 md:w-full flex justify-center  ">
          <table className=" bg-white mt-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                  Name
                </th>
                <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                  Email
                </th>
                <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                  Role
                </th>
                <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                  Address
                </th>
                <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                  Phone
                </th>
                <th className="py-2 px-4 bg-gray-950 text-yellow-400 font-bold uppercase text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((admin) => (
                <tr key={admin._id}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {admin?.userName}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {admin?.email}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {admin?.user?.role}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {admin?.address ? admin?.address : "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {admin?.phone ? admin.phone : "N/A"}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <AdminTableAction
                      userId={admin?.user._id}
                    ></AdminTableAction>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
