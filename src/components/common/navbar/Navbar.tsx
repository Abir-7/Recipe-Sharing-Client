/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { DropDown } from "./DropDown";
import { AuthContext, IUserProviderValues } from "@/context/auth.provider";
import { Button } from "@/components/ui/button";
import { DropDownUser } from "./DropDownUser";
export const Navbar = () => {
  const [linkName, setLinkName] = useState("");
  const authContext = useContext(AuthContext);
  const { user, isLoading, setUser } = authContext as IUserProviderValues;
  const navLink = [
    { name: "Home", url: "/" },
    { name: "Recipies", url: "/recipies" },
  ];
  const authLink = [
    { name: "Dashboard", url: `/${user?.role}/dashboard` },
    { name: "Edit Profile", url: `/${user?.role}/edit-profile` },
  ];

  return (
    <div className="w-full  h-14  bg-gray-950 text-white px-2 relative">
      <div className=" h-full grid grid-cols-3 items-center  ">
        <div>
          <p className="text-xl font-bold">LOGO</p>
        </div>
        <div className="col-span-2  hidden md:flex items-center justify-between ">
          <div className="flex gap-3 font-medium">
            {navLink.map((item, i) => (
              <Link
                onClick={() => setLinkName(item.name)}
                className={
                  linkName == item.name
                    ? "px-4 py-1 rounded-md bg-yellow-400"
                    : "px-4 py-1 rounded-md hover:bg-yellow-400"
                }
                key={i}
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {isLoading ? (
            ""
          ) : (
            <div>
              {user?.email ? (
                <DropDownUser authLink={authLink} />
              ) : (
                <Link href={"/login-signup"}>
                  <Button className="px-4 py-1 rounded-md bg-yellow-400 hover:bg-yellow-500">
                    Login
                  </Button>
                </Link>
              )}{" "}
            </div>
          )}
        </div>
      </div>
      <div className=" md:hidden absolute top-1/2 translate-y-[-50%] right-0 me-2">
        <DropDown authLink={authLink} user={user} navLink={navLink}></DropDown>
      </div>
    </div>
  );
};
