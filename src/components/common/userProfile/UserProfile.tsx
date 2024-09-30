// components/UserProfile.tsx
import React from "react";
import Image from "next/image";
import { IUserProfile } from "@/interface/userProfile.interface";

const UserProfile = ({ userData }: { userData: IUserProfile }) => {
  return (
    <div className="max-w-md shadow mx-auto rounded-xl overflow-hidden mt-10">
      <div className="sm:flex sm:items-center px-6 py-4">
        <Image
          className="block mx-auto object-cover h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={userData.photo}
          alt="User profile picture"
          width={96}
          height={96}
        />
        <div className="mt-4 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <p className="text-xl leading-tight">{userData.userName}</p>
          <p className="text-sm leading-tight text-gray-600">
            {userData.email}
          </p>
          <div className="mt-1  text-sm">
            {userData?.bio && userData?.bio?.length > 26
              ? userData?.bio?.slice(0, 26)
              : userData?.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
