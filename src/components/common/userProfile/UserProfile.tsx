"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ICustomerProfile } from "@/interface/userProfile.interface";
import { useRouter } from "next/navigation";
import { IUserDashboardData } from "@/interface/dashboard.interface";
import { AuthContext, IUserProviderValues } from "@/context/auth.provider";

const UserProfile = ({
  userData,
  dashboardData,
}: {
  userData: ICustomerProfile;
  dashboardData: IUserDashboardData;
}) => {
  const router = useRouter();
  if (!userData) {
    router.push("/login-signup");
  }

  const authData: IUserProviderValues | undefined = useContext(AuthContext);

  console.log(dashboardData);

  return (
    <div className=" shadow mx-auto rounded-xl overflow-hidden mt-10">
      <div className="sm:flex sm:items-center px-6 py-4">
        <Image
          className="block mx-auto object-cover h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={userData?.photo}
          alt="User profile picture"
          width={96}
          height={96}
        />
        <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div className="flex justify-between">
            <p className="text-xl leading-tight">{userData?.userName}</p>
            <p className="font-bold bg-yellow-400 px-3 py-1 rounded-full leading-tight text-sm">
              {authData?.user?.hasValidSubscription && "PREMIUM USER"}
            </p>
          </div>
          <p className="text-sm leading-tight text-gray-600">
            {userData?.email}
          </p>
          <div className="mt-1  text-sm">
            <span className="font-bold">Bio:</span> Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Autem reprehenderit, repudiandae
            tempore minus sed atque animi nobis quisquam ipsam enim odit.
            Necessitatibus sequi pariatur id veritatis deserunt accusamus
            recusandae officiis.
          </div>

          <div className="flex gap-5 justify-between px-4 bg-gray-950 mt-4 h-7 items-center">
            <div className="flex gap-3">
              <div className="text-sm">
                <span className="text-yellow-400 "> Follower: </span>
                <span className="text-white">
                  {" "}
                  {dashboardData?.mydata?.followers?.length
                    ? dashboardData?.mydata?.followers?.length
                    : 0}
                </span>
              </div>
              <div className=" text-sm">
                <span className="text-yellow-400 "> Following: </span>
                <span className="text-white">
                  {" "}
                  {dashboardData?.mydata?.following?.length
                    ? dashboardData?.mydata?.following?.length
                    : 0}
                </span>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-yellow-400 "> Total Recipe Posted: </span>
              <span className="text-white">
                {dashboardData?.myRacipe?.length
                  ? dashboardData?.myRacipe?.length
                  : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
