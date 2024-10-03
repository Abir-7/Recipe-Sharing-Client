"use client";
import { AuthContext } from "@/context/auth.provider";
import React, { useContext } from "react";

const Fiilter = ({ isPremium }: { isPremium: boolean }) => {
  const userData = useContext(AuthContext);
  return (
    <>
      {isPremium &&
        userData?.user?.role == "user" &&
        userData?.user?.hasValidSubscription == false && (
          <div className="absolute  h-full bg-black w-full backdrop-blur-sm bg-opacity-10 z-10"></div>
        )}
    </>
  );
};

export default Fiilter;
