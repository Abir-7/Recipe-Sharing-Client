"use client";
import { Button } from "@/components/ui/button";

import React, { ReactNode, useContext, useState } from "react";
import { AuthContext } from "@/context/auth.provider";
import UserLink from "./UserLink";
import AdminLink from "./AdminLink";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const authData = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform lg:translate-x-0 z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-950 text-white w-64 lg:w-[300px] lg:static`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Menu</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            X
          </Button>
        </div>
        {/* Sidebar Links */}
        {authData?.user?.role === "user" && <UserLink></UserLink>}
        {authData?.user?.role === "admin" ||
          (authData?.user?.role === "superAdmin" && <AdminLink />)}
      </div>

      {/* Content Section */}
      <div className="flex-grow ">
        <div className="w-full min-h-screen">{children}</div>
      </div>

      {/* Mobile toggle button */}
      <div className="absolute top-6 lg:hidden">
        <p
          className="text-white ms-5 hover:scale-105 duration-300"
          onClick={toggleSidebar}
        >
          ☰
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
