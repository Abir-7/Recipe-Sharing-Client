import HeaderTitle from "@/components/common/HeaderTitle/HeaderTitle";
import envConfig from "@/config/envConfig";
import { IUserDashboardData } from "@/interface/dashboard.interface";
import { cookies } from "next/headers";
import React from "react";

const UserDashboard = async () => {
  const token = cookies().get("accessToken")?.value;
  const response = await fetch(`${envConfig.baseApi}/customer/dashboard`, {
    headers: {
      Authorization: `${token}`,
    },
    next: { tags: ["recepe_details"] },
  });
  const { data }: { data: IUserDashboardData } = await response.json();
  console.log(JSON.stringify(data), "gg");
  return (
    <div>
      <HeaderTitle text="User Dashboard"></HeaderTitle>
      <div className="flex justify-around flex-wrap gap-10 mt-10">
        <div className="bg-gray-950 rounded-xl text-center py-4 text-white w-52">
          <p>Following</p>
          <p className="text-4xl text-yellow-400">
            {data?.mydata?.followers?.length
              ? data?.mydata?.followers?.length
              : 0}
          </p>
        </div>
        <div className="bg-gray-950 rounded-xl text-center py-4 text-white w-52">
          <p>My Recipe</p>
          <p className="text-4xl text-yellow-400">
            {data?.myRacipe.length ? data?.myRacipe.length : 0}
          </p>
        </div>
        <div className="bg-gray-950 rounded-xl text-center py-4 text-white w-52">
          <p>Followers </p>
          <p className="text-4xl text-yellow-400">
            {" "}
            {data?.mydata?.following?.length
              ? data?.mydata?.followers?.length
              : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
