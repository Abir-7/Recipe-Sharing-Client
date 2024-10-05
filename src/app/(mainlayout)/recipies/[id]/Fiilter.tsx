"use client";
import { AuthContext } from "@/context/auth.provider";
import React, { useContext } from "react";

const Fiilter = ({
  isPremium = true,
  user,
}: {
  isPremium: boolean;
  user: string;
}) => {
  const userData = useContext(AuthContext);
  console.log(user);

  return (
    <>
      {isPremium &&
        userData?.user?.role == "user" &&
        userData?.user?.hasValidSubscription == false &&
        userData?.user?.email !== user && (
          <div className="absolute flex justify-center h-full bg-black w-full backdrop-blur-sm bg-opacity-10 z-10">
            {" "}
            <p className="mt-40 flex text-2xl text-yellow-400 items-center bg-gray-950 rounded h-20 p-5">
              This is Premium Recipe <br />
              Buy Subcription to view
            </p>
          </div>
        )}
    </>
  );
};

export default Fiilter;
