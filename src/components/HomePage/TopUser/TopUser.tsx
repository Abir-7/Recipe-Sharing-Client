import React from "react";

import envConfig from "@/config/envConfig";
import { ICustomerProfile } from "@/interface/userProfile.interface";
import Image from "next/image";
const TopUser = async () => {
  const response = await fetch(`${envConfig.baseApi}/customer/top-follower`, {
    cache: "no-store",
  });
  const { data } = await response.json();

  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-3xl text-center my-5 font-bold">Populer Users</h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {(data as ICustomerProfile[])?.map((info) => (
          <div
            key={info._id}
            className="py-8 px-8 w-[450px] mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
          >
            <div className="w-24 h-24">
              <Image
                className="object-cover rounded-full w-full h-full"
                width={200}
                height={200}
                alt=""
                src={info?.photo}
              ></Image>
            </div>
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  {info.userName}
                </p>
                <p className="text-slate-500 font-medium">{info.email}</p>
              </div>
              <button className="px-4 py-1 text-sm text-gray-950 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-gray-950 hover:border-transparent focus:outline-none duration-300 ">
                <span>Followers:</span>{" "}
                {info?.followers ? info?.followers.length : 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUser;
