"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { ReactNode, useContext, useState } from "react";
import { AuthContext } from "@/context/auth.provider";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const AuthData = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const pathname = usePathname();

  const userLink = (
    <nav className="flex flex-col p-4 space-y-4">
      <Link
        href="/user/dashboard"
        className={
          pathname == "/user/dashboard"
            ? "bg-yellow-400 px-4 py-1 rounded-xl border-2 border-white"
            : " w-full px-4 py-1 rounded-xl border border-yellow-400"
        }
      >
        User Dashboard
      </Link>
      <Link
        href="/user/manage-profile"
        className={
          pathname == "/user/edit-profile"
            ? "bg-yellow-400 px-4 py-1 rounded-xl border-2 text-gray-950 font-semibold border-white"
            : " w-full px-4 py-1 rounded-xl border font-semibold border-yellow-400"
        }
      >
        Manage Profile
      </Link>

      <div className="w-full grid gap-2">
        <p
          className={
            "w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
          }
          onClick={toggleServices}
        >
          Manage Recipe
          <span>{isServicesOpen ? "-" : "+"}</span>
        </p>
        {isServicesOpen && (
          <div className="pl-4 grid gap-4 w-full">
            <Link
              href="/user/about"
              className={
                pathname == "/user/about"
                  ? "bg-yellow-400 px-4 text-gray-950 font-semibold py-1 rounded-xl border-2 border-white"
                  : " w-full px-4 py-1 font-semibold rounded-xl border border-yellow-400"
              }
            >
              Add Recipesss
            </Link>
          </div>
        )}
      </div>
      <Link
        href="/"
        className={
          pathname == "/"
            ? "bg-yellow-400 px-4 py-1 text-gray-950 font-semibold rounded-xl border-2 border-white"
            : " w-full px-4 py-1 rounded-xl font-semibold border border-yellow-400"
        }
      >
        Home
      </Link>
    </nav>
  );

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
        {AuthData?.user?.role == "user" && userLink}
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
