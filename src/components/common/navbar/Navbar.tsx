/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import logo from "@/public/logo.png";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { DropDown } from "./DropDown";
import { AuthContext, IUserProviderValues } from "@/context/auth.provider";
import { Button } from "@/components/ui/button";
import { DropDownUser } from "./DropDownUser";
import Image from "next/image";
export const Navbar = () => {
  const [linkName, setLinkName] = useState("");
  console.log(linkName, "gg");
  const authContext = useContext(AuthContext);
  const { user, isLoading } = authContext as IUserProviderValues;
  const navLink = [
    { name: "Home", url: "/" },
    { name: "Recipies", url: "/recipies" },
  ];
  const authLink = [
    {
      name: "Dashboard",
      url: `/${
        user?.role == "admin"
          ? "admin"
          : user?.role == "superAdmin"
          ? "admin"
          : "user"
      }/dashboard`,
    },
  ];

  return (
    <div className="w-full  h-14  bg-gray-950 text-white px-2 relative">
      <div className=" h-full grid grid-cols-3 items-center  ">
        <div>
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
            <Image
              width={100}
              height={100}
              src={logo}
              className="w-10 h-10 object-cover"
              alt="Flowbite Logo"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Recipe World
            </span>
          </div>
        </div>
        <div className="col-span-2  hidden md:flex items-center justify-between ">
          <div className="flex gap-3 font-medium">
            {navLink.map((item, i) => (
              <Link
                onClick={() => setLinkName(item.name)}
                className={
                  linkName == item.name
                    ? "px-4 py-1 rounded-md text-gray-950 bg-yellow-400"
                    : "px-4 py-1 rounded-md hover:bg-yellow-400 hover:text-gray-950"
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
                <DropDownUser user={user} authLink={authLink} />
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
