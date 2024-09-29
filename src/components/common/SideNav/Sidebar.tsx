"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";

const Sidebar = () => {
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
    <nav className="flex flex-col p-4 space-y-2">
      <Link
        href="/"
        className={
          pathname == "/"
            ? "bg-yellow-400 px-4 py-1 rounded-md border-2 border-white"
            : " w-full px-4 py-1 rounded-md border border-yellow-400"
        }
      >
        Home
      </Link>
      <Link
        href="/user/dashboard"
        className={
          pathname == "/user/dashboard"
            ? "bg-yellow-400 px-4 py-1 rounded-md border-2 border-white"
            : " w-full px-4 py-1 rounded-md border border-yellow-400"
        }
      >
        User Dashboard
      </Link>

      <div className="w-full grid gap-4">
        <p
          className={" w-full px-4 py-1 rounded-md border border-yellow-400"}
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
                  ? "bg-yellow-400 px-4 py-1 rounded-md border-2 border-white"
                  : " w-full px-4 py-1 rounded-md border border-yellow-400"
              }
            >
              Add Recipe
            </Link>
          </div>
        )}
      </div>
    </nav>
  );

  console.log(pathname);
  return (
    <div className="flex relative">
      <div
        className={`fixed inset-y-0 left-0 transform lg:translate-x-0 z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64`}
      >
        <div className="flex items-center justify-between p-4 ">
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
        {/* link */}
        {userLink}
      </div>
      <div className="absolute">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </Button>
        <div className="p-4">{/* Main content goes here */}</div>
      </div>
    </div>
  );
};

export default Sidebar;
